import getCanonicalURL, { localeToUppercase } from '@on/utils/getCanonicalURL';
import { sdk } from './graphClient';

const excludedPaths = ['__library', 'redirects', 'how-to-use', 'kitchen-sink', 'global', 'not-found'];
const defaultLocale = 'en';

const generateSiteMap = async (localisation = true) => {
  const sitePaths = async (page = 1, perPage = 100, localisation) =>
    await sdk.ContentNodes(
      {
        per_page: perPage,
        page: page,
        ...(localisation && { starts_with: `${defaultLocale}/` }),
      },
      {
        version: 'published',
        token: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
      }
    );

  const perPage = 50;
  const data = (await sitePaths(1, perPage, localisation)).ContentNodes;
  const total = data?.total || 0;
  const requests = Math.ceil(total / perPage);

  let pagesReturn = data.items;

  for (let page = 2; page < requests; page++) {
    const pageData = (await sitePaths(page, perPage, localisation)).ContentNodes.items;
    pagesReturn = [...pagesReturn].concat(pageData);
  }

  const homeReg = /.*home$/gm;

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
  http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${pagesReturn
      .filter(({ full_slug }) => !excludedPaths.some((path) => full_slug.includes(path)))
      .map(({ full_slug, published_at, alternates = [] }) => {
        const thisPathArr = full_slug.split('/');
        const thisPathLocale = localisation ? thisPathArr[0] : null;
        return `
      <url>
          <loc>${getCanonicalURL(
            full_slug.replace(homeReg, '') as string,
            defaultLocale,
            thisPathLocale as string
          )}</loc>
          <lastmod>${published_at}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
          ${
            localisation &&
            `${
              alternates.length > 0
                ? `<xhtml:link rel="alternate" hreflang="${thisPathLocale}" href="${getCanonicalURL(
                    full_slug.replace(homeReg, '') as string,
                    defaultLocale,
                    thisPathLocale as string
                  )}"/>
              <xhtml:link rel="alternate" hreflang="x-default" href="${getCanonicalURL(
                full_slug.replace(homeReg, '') as string,
                defaultLocale,
                thisPathLocale as string
              )}"/>`
                : ''
            }
          ${alternates.map((alternate) => {
            const lang = alternate.fullSlug.split('/')[0];
            return `<xhtml:link rel="alternate" hreflang="${localeToUppercase(lang)}" href="${getCanonicalURL(
              alternate.fullSlug.replace(homeReg, '') as string,
              defaultLocale,
              lang as string
            )}"/>`;
          })}`
          }
      </url>
    `;
      })
      .join('')}
  </urlset>
 `;
};

export default generateSiteMap;
