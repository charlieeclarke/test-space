const securityHeaders = [
  // X-DNS-Prefetch-Control - controls DNS prefetching
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Strict-Transport-Security - informs browsers it should only be accessed using HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; preload',
  },
  // X-XSS-Protection - stops pages from loading when they detect reflected XSS attacks
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // X-Frame-Options - indicates whether the site should be allowed to be displayed within an iframe
  {
    key: 'X-Frame-Options',
    value: '*',
  },
  // Permissions-Policy - allows you to control which features and APIs can be used in the browser
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // X-Content-Type-Options - prevents the browser from attempting to guess the type of content if the Content-Type header is not explicitly set
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const securityHeadersSB = [
  // X-DNS-Prefetch-Control - controls DNS prefetching
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Strict-Transport-Security - informs browsers it should only be accessed using HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; preload',
  },
  // X-XSS-Protection - stops pages from loading when they detect reflected XSS attacks
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // X-Frame-Options - indicates whether the site should be allowed to be displayed within an iframe
  {
    key: 'X-Frame-Options',
    value: '*',
  },
  // Permissions-Policy - allows you to control which features and APIs can be used in the browser
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // X-Content-Type-Options - prevents the browser from attempting to guess the type of content if the Content-Type header is not explicitly set
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

module.exports = { securityHeaders, securityHeadersSB };
