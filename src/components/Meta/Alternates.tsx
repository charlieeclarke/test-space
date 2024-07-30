import Head from 'next/head';

import getCanonicalURL, { localeToUppercase } from '@on/utils/getCanonicalURL';

type Alternates = {
  canonical: string;
  locales: Array<any>;
  alternates: Array<any>;
  defaultLocale: string;
  path: string;
  locale: string;
};

const Alternates = ({ canonical, locales = [], alternates = [], defaultLocale, path, locale }: Alternates) => {
  if (locales.length < 2 || alternates.length < 1)
    return (
      <Head>
        <link rel="canonical" href={`${canonical}`} />
      </Head>
    );

  return (
    <Head>
      <link rel="canonical" href={`${canonical}`} />
      <link rel="alternate" href={getCanonicalURL(path, defaultLocale, locale)} hrefLang={locale} />
      {locale === defaultLocale && (
        <link rel="alternate" href={getCanonicalURL(path, defaultLocale, defaultLocale)} hrefLang="x-default" />
      )}
      {alternates?.flatMap((alternate) => {
        const alternatePath = alternate.fullSlug.split('/');
        const alternateLocale = alternatePath[0];

        if (!locales?.some((locale) => locale.toLowerCase() === alternateLocale)) {
          return [];
        }

        if (alternateLocale === defaultLocale) {
          alternatePath.shift();
          return (
            <>
              <link
                rel="alternate"
                href={getCanonicalURL(alternatePath.join('/'), defaultLocale, alternateLocale)}
                hrefLang="x-default"
              />
              <link
                rel="alternate"
                href={getCanonicalURL(alternatePath.join('/'), defaultLocale, alternateLocale)}
                hrefLang={localeToUppercase(alternateLocale)}
              />
            </>
          );
        }

        return (
          <link
            key={alternate.fullSlug}
            rel="alternate"
            href={getCanonicalURL(alternate.fullSlug, defaultLocale, alternateLocale)}
            hrefLang={localeToUppercase(alternateLocale)}
          />
        );
      })}
    </Head>
  );
};

export default Alternates;
