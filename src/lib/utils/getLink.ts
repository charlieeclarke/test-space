import { localeToUppercase } from './getCanonicalURL';

const TRAILING_SLASH = process.env.NEXT_PUBLIC_TRAILING_SLASH === 'true' || true;
const STRIP_DEFAULT_LOCALE = process.env.NEXT_PUBLIC_STRIP_DEFAULT_LOCALE === 'true' || true;

export const getLink = (url, defaultLocale = 'en', locale) => {
  const urlIsPath = typeof url === 'string';
  const path = urlIsPath ? url : url?.pathname;

  const beginsWithHttp = path.startsWith('http');

  const hasForwardSlash = path.startsWith('/');
  const hasTrailingSlash = path.endsWith('/');
  let returnPath;

  const replace = `^(\\/${defaultLocale.toLowerCase()}\\/)`;
  const re = new RegExp(replace, '');

  if (TRAILING_SLASH) {
    // Add trailing slash if it doesn't exist
    returnPath = hasTrailingSlash ? path : `${path}/`;
  } else {
    // Remove trailing slash if it exists
    returnPath = hasTrailingSlash ? path.replaceAll(/\/$/, '') : path;
  }

  // Append forward slash if missing & link is not http
  let returnUrl = hasForwardSlash ? returnPath : !beginsWithHttp ? `/${returnPath}` : returnPath;

  // Strip default locale
  returnUrl = STRIP_DEFAULT_LOCALE ? returnUrl.replace(re, '/') : returnUrl;
  // apply correct uppercase formatting to URL locales
  if (locale) {
    const localeReplace = `^(\/${locale.toLowerCase()}\/)`;
    const reLocaleUppercase = new RegExp(localeReplace, '');
    returnUrl = returnUrl.replace(reLocaleUppercase, `/${localeToUppercase(locale)}/`);
  }

  if (urlIsPath) {
    return returnUrl;
  }

  return {
    ...url,
    pathname: returnUrl,
  };
};
