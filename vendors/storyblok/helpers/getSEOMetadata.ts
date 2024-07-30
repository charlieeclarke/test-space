import type { MetaProps } from '@components/types';
import { getLink } from '@on/utils/getLink';
import { ISbStoryData } from '@storyblok/react';

const getOGImage = (story) => {
  if (story.content?.component === 'post' && story.content?.storyImage?.filename) {
    return story.content?.storyImage?.filename;
  } else if (story.content.SEO?.og_image) {
    return story.content.SEO.og_image;
  }
  return '/cover.jpg';
};

export const getSEOMetadata = (
  { content, slug, alternates, full_slug, ...rest }: ISbStoryData,
  locale?: string,
  defaultLocale?: string
): MetaProps => {
  const { SEO: { title = '', description = '' } = {} } = content;
  const slugLocalePrefix = full_slug.split('/')[0];
  const fullSlug = getLink(full_slug, defaultLocale, locale);
  let path = '';
  let xDefault = '';

  // detect if its home page
  if (slug === defaultLocale && slugLocalePrefix === defaultLocale) {
    // leave path empty
  }
  // detect if its localized home page
  else if (locale !== defaultLocale && fullSlug.split('/').length == 1) {
    path = `${slug}`;
  }
  // detect if its default locale sub page
  else if (slugLocalePrefix === defaultLocale) {
    path = `${slug}`;
    xDefault = path;
  }
  // for all other cases
  else {
    path = `${fullSlug}`;
    xDefault = slug;
  }

  return {
    title: title || 'Welcome',
    desc: description || 'Welcome',
    path,
    defaultLocale,
    image: getOGImage({ ...rest, content }),
    locale,
    alternates,
    xDefault,
    fullSlug,
  };
};

export default getSEOMetadata;
