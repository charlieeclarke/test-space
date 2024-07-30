import { getLink } from './getLink';
import { getWebsiteUrl } from '@on/utils/getWebsiteUrl';

function getCanonicalURL(path?: string, defaultLocale?: string, urlLocale?: string) {
  const WEBSITE_URL = getWebsiteUrl();

  if (path && path !== '/') {
    return `${WEBSITE_URL}${getLink(path, defaultLocale, urlLocale)}`;
  }

  return getLink(WEBSITE_URL, defaultLocale, urlLocale);
}

export const localeToUppercase = (locale: string) => {
  if (!locale) return '';
  return locale
    .split('-')
    .map((s, i) => (i === 1 ? s.toUpperCase() : s))
    .join('-');
};

export default getCanonicalURL;
