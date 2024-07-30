import { getWebsiteUrl } from '@on/utils/getWebsiteUrl';

const WEBSITE_URL = getWebsiteUrl();

export default function handler(req, res) {
  res.send(`# *
  User-agent: *
  Allow: /
  
  # *
  User-agent: *
  Disallow: /*.json$
  Disallow: /*_buildManifest.js$
  Disallow: /*_middlewareManifest.js$
  Disallow: /*_ssgManifest.js$
  Disallow: /*.js$
  
  # Host
  Host: ${WEBSITE_URL}
  
  # Sitemaps
  Sitemap: ${WEBSITE_URL}/sitemap.xml`); // Send your `robots.txt content here
}
