import { localeToUppercase } from '@on/utils/getCanonicalURL';
import type { SbMultilinkProps } from '~storyblok/components/types';
import { sdk } from '~storyblok/lib/graphClient';

export const generateTranslatedUrls = ({ alternates }) => {
  if (!alternates) return undefined;
  return alternates?.map(({ slug, fullSlug }) => {
    const splittedSlug = fullSlug.split('/');
    splittedSlug.shift();
    return { params: { slug: splittedSlug }, locale: localeToUppercase(fullSlug.split('/')[0]) };
  });
};

export const generatePaths = async (links: SbMultilinkProps[], localisation = true) => {
  const paths = await Promise.all(
    links.map(async ({ slug = '' }) => {
      const splittedSlug = slug.split('/');

      if (!localisation) {
        const paths = [{ params: { slug: splittedSlug } }];
        return paths;
      }

      splittedSlug.shift();
      const response = await sdk.ContentNode({ slug });
      const alternates = response?.ContentNode?.alternates;
      if (!alternates) return [];

      const paths = [{ params: { slug: splittedSlug }, locale: 'en' }];

      // check that
      if (alternates.length) {
        const translatedUrls = generateTranslatedUrls({ alternates });

        if (!translatedUrls) return paths;
        // Concatenates previous routes and return path routes
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return paths.concat(translatedUrls);
      }

      return paths;
    })
  );
  return paths.flat();
};

export const contentTypes = (slugPath: string) => {
  const types = {
    blog: 'PostItem',
    'terms-and-conditions': 'LegalItem',
  };

  return types[slugPath] || 'PageItem';
};
