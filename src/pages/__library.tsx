import type { GetStaticProps } from 'next';
import type { GetStoryStaticProps } from '~storyblok/helpers/types';

import { ReactElement } from 'react';

import { StoryblokComponent, useStoryblokState } from '@storyblok/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageLayout } from '@layouts/PageLayout';
import { Spinner } from '@components/Spinner';

import { getStoryblokPage } from '~storyblok/graphql';
import { NextPageWithLayout } from './_app';

const LibraryPage: NextPageWithLayout<Awaited<ReturnType<GetStoryStaticProps>>> = ({
  story: initialStory,
  resolveRelations,
}) => {
  const story = useStoryblokState(initialStory, { resolveRelations: resolveRelations });

  if (!story.content) {
    return <Spinner />;
  }

  return <>{story && <StoryblokComponent blok={story.content} />}</>;
};

LibraryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout {...page?.props} library>
      {page}
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false, locale = 'en' }) => {
  if (!preview) return { notFound: true };

  try {
    const PageItem = await getStoryblokPage({ contentType: 'LibraryItem', slug: '__library', preview, locale: null });
    const ONE_HOUR = 60 * 60; // 1 Hour in seconds. ❗️ Always avoid use magic numbers!

    return {
      props: {
        ...PageItem,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: ONE_HOUR,
    };
  } catch {
    return { notFound: true };
  }
};

export default LibraryPage;
