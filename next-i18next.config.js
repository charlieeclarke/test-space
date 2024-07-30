// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const localePath = path.resolve('./public/locales');

const defaultLocale = 'en';
const locales = [defaultLocale, 'en-GB'];

const i18n = {
  defaultLocale,
  locales,
};

const fallbackLng = {
  default: [defaultLocale],
};

const i18nConfig = {
  i18n,
  fallbackLng,
  localePath,
  cleanCode: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = i18nConfig;
