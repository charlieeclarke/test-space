import generateSiteMap from '../vendors/storyblok/lib/sitemap';
import * as fs from 'fs';
import { loadEnvConfig } from '@next/env';

const SiteMap = () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

  if (!process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN) {
    // eslint-disable-next-line no-console
    console.error('No Storyblok token');
    return;
  }

  const runGenerator = async () => {
    // We generate the XML sitemap with the posts data
    const sitemap = await Promise.resolve(generateSiteMap(true));
    fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf-8');
  };
  void runGenerator();
};

SiteMap();
