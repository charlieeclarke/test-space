import type { GetStaticPaths, GetStaticProps } from 'next';
import type { SbMultilinkProps } from '~storyblok/components/types';

import { ReactElement } from 'react';
import { isArray, isNotNullish, isNullish, isString } from '@on/utils';

import { StoryblokComponent } from '@storyblok/react';
import { getStoryblokPage } from '~storyblok/graphql';

import { PageLayout } from '@layouts/PageLayout';
import { Spinner } from '@components/Spinner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStoryStaticProps } from '~storyblok/helpers/types';
import { NextPageWithLayout } from './_app';
import { sdk } from '~storyblok/lib/graphClient';
import { contentTypes, generatePaths } from '~storyblok/helpers/staticGeneration';
import { useDynamicStoryblokState } from '@on/hooks/useDynamicStoryblokState';

export const SlugPage: NextPageWithLayout<{ slug: string } & Awaited<ReturnType<GetStoryStaticProps>>> = ({
  story,
  resolveRelations,
}) => {
  story = useDynamicStoryblokState(story, { resolveRelations });

  if (!story?.content) {
    return <Spinner />;
  }

  return <>{story && <StoryblokComponent blok={story.content} />}</>;
};

SlugPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout {...page?.props}>{page}</PageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en', preview = false }) => {
  const slug = isArray(params?.slug) ? params?.slug.join('/') : params?.slug;
  if (isNullish(slug) || (isString(slug) && slug === 'null')) return { notFound: true };
  if (slug === undefined) return { notFound: true };

  const contentType = contentTypes(params?.slug[0] || 'PageItem');

  try {
    const data = await getStoryblokPage({ slug: slug, locale, contentType: contentType, preview });
    const ONE_HOUR = 60 * 60; // 1 Hour in seconds.

    return {
      props: {
        ...data,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: ONE_HOUR,
    };
  } catch {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (!process.env.STORYBLOK_SPACE_ID) return { paths: [], fallback: 'blocking' };

  const response = await sdk.Links();
  const linksArray: SbMultilinkProps[] = response?.Links?.items;

  const links = linksArray.filter(
    ({ isFolder, isStartpage, slug }) =>
      isNotNullish(slug) &&
      !isFolder &&
      !isStartpage &&
      !slug.includes('contact-us') &&
      !slug.includes('global/') &&
      !slug.includes('library') &&
      !slug.includes('not-found') &&
      !slug.includes('redirects')
  );

  const paths = await generatePaths(links);

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default SlugPage;
