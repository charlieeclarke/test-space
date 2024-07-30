import type { MetaComponent } from './types';

import Head from 'next/head';

import getCanonicalURL, { localeToUppercase } from '@on/utils/getCanonicalURL';
import { useRouter } from 'next/router';
import { getWebsiteUrl } from '@on/utils/getWebsiteUrl';
import Alternates from './Alternates';

const WEBSITE_URL = getWebsiteUrl();

export const Meta: MetaComponent = ({ path, fullSlug, title, defaultLocale, desc, image, alternates, locale }) => {
  const canonical = getCanonicalURL(path, defaultLocale, locale);
  const router = useRouter();

  const getOGImage = (img) => {
    if (img && img?.startsWith('http')) {
      return img;
    }
    return `${WEBSITE_URL}${image}`;
  };

  return (
    <>
      {/* generate all alternate urls */}
      <Alternates
        locales={router.locales}
        alternates={alternates}
        defaultLocale={defaultLocale}
        path={fullSlug}
        locale={localeToUppercase(locale)}
        canonical={canonical}
      />
      <Head>
        {/* eslint-disable */}
        <title>{title}</title>

        <meta name="viewport" content="height=device-height,width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="title" content={title} />
        <meta name="description" content={desc} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={desc} />
        <meta name="og:site_name" property="og:site_name" content={process.env.WEBSITE_NAME} />
        <meta name="og:url" property="og:url" content={`${canonical}`} />
        {image && (
          <>
            <meta name="og:image" property="og:image" content={getOGImage(image)} key="share-image" />
          </>
        )}

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" property="twitter:title" content={title} />
        <meta name="twitter:description" property="twitter:description" content={desc} />
        {image && (
          <>
            <meta name="twitter:image" property="twitter:image" content={getOGImage(image)} />
          </>
        )}
        {process.env.SOCIAL_TWITTER_ID && (
          <>
            <meta name="twitter:site" property="twitter:site" content={process.env.SOCIAL_TWITTER_ID} />
            <meta name="twitter:creator" property="twitter:creator" content={process.env.SOCIAL_TWITTER_ID} />
          </>
        )}
      </Head>
    </>
  );
};

export default Meta;
