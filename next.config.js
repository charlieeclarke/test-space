// @ts-check
const fs = require('fs');
const { i18n } = require('./next-i18next.config');
const { join, resolve } = require('path');
const bundleAnalyzer = require('@next/bundle-analyzer');
const { securityHeaders, securityHeadersSB } = require('./headers.config');

// ENVIRONMENT
const isProd = process.env.NODE_ENV === 'production';
// @see https://nextjs.org/docs/advanced-features/compiler
const compiler = (() => {
  if (!isProd) return {};
  return {
    // To understand the regex, @see [docs](https://regex101.com/library/yU28z2)
    // For more info on this config, @see [docs](https://nextjs.org/docs/advanced-features/compiler#remove-react-properties).
    reactRemoveProperties: { properties: ['^data-(test|cy|jest).*$'] },
    // For more info on this config, @see [docs](https://nextjs.org/docs/advanced-features/compiler#remove-console)
    // removeConsole: {
    //   exclude: ['error'],
    // },
  };
})();

const experimental = (() => {
  //! This are experimental features and may trigger some bugs. Use it at your own risk on production. Comment out the condition below to enable it on production.
  if (isProd) return {};
  return {
    //? Enable it to load 3rd party libraries in workers thread.
    nextScriptWorkers: false,
    appDir: false,
  };
})();

// Security Headers
const headers = async () => {
  if (!process.env.DISABLE_HEADERS) {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'cookie',
            key: 'previewMode',
            value: 'enabled',
          },
        ],
        headers: securityHeadersSB,
      },
    ];
  }
  return [];
};

// Image Optimization
const images = (() => {
  // Check if vendors/storyblok exists
  const storyblok = resolve(__dirname, 'src', 'vendors', 'storyblok');
  if (fs.existsSync(storyblok)) return {};
  return {
    //? Enable it to load images from Storyblok CDN.
    domains: ['a.storyblok.com'],
  };
})();

// Sass Support
const sassOptions = {
  prependData: `@use "sass:math"; @import "src/styles/_sass-variables.scss"; @import "src/styles/_mixins.scss";`,
  includePaths: [join(__dirname, 'styles', 'src')],
  logger: {
    // @ts-ignore
    warn: function (message) {
      console.warn(message);
    },
    // @ts-ignore
    debug: function (message) {
      console.log(message);
    },
  },
};

// Webpack Config
const webpack = (
  /** @type {{ module: { rules: { test: RegExp; use: string[]; include: string[]; }[]; }; }} */ config
) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
    include: [resolve(__dirname, 'src', 'components', 'svg')],
  });
  return config;
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const redirects = async () => {
  const spaceId = process.env.STORYBLOK_SPACE_ID;
  const token = process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/redirects?token=${token}`;

  if (!spaceId || !token) return [];

  const response = await fetch(url);
  const sbData = await response.json();

  const redirects = sbData?.story?.content?.items
    ?.map(({ source, destination, permanent = false }) => ({
      source,
      destination,
      permanent: !!permanent,
    }))
    .filter((redirect) => redirect.source.startsWith('/'));

  return redirects || [];
};

const rewrites = async () => {
  return [
    {
      source: '/cdn/:slug*',
      destination: `https://a.storyblok.com/f/${process.env.STORYBLOK_SPACE_ID}/x/:slug*`,
    },
    {
      source: '/pdf/:slug*',
      destination: `https://a.storyblok.com/f/${process.env.STORYBLOK_SPACE_ID}/x/:slug*`,
    },
    {
      source: '/imagecdn/:slug*',
      destination: `https://a.storyblok.com/f/${process.env.STORYBLOK_SPACE_ID}/:slug*`,
    },
    {
      source: '/robots.txt',
      destination: '/api/robots',
    },
  ];
};

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withBundleAnalyzer({
  //!Never use this in production. See https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode for more info.
  reactStrictMode: !isProd,
  swcMinify: isProd,
  experimental,
  compiler,
  i18n,
  sassOptions,
  images,
  // @ts-ignore
  headers,
  webpack,
  rewrites,
  redirects,
  trailingSlash: process.env?.NEXT_PUBLIC_TRAILING_SLASH === 'true' || true,
  poweredByHeader: false,
});

module.exports = nextConfig;
