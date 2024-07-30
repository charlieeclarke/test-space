import type { GetStaticProps } from 'next';
import type { GetStoryStaticProps } from '~storyblok/helpers/types';

import { ReactElement } from 'react';

import { StoryblokComponent, useStoryblokState } from '@storyblok/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageLayout } from '@layouts/PageLayout';
import { Spinner } from '@components/Spinner';
import { getStoryblokPage } from '~storyblok/graphql';
import { NextPageWithLayout } from './_app';

const NotFound: NextPageWithLayout<Awaited<ReturnType<GetStoryStaticProps>>> = ({
  story: initialStory,
  resolveRelations,
}) => {
  const story = useStoryblokState(initialStory, { resolveRelations: resolveRelations });

  if (!story) {
    return <div>404!</div>;
  }

  if (!story.content) {
    return <Spinner />;
  }

  return <>{story && story.content && <StoryblokComponent blok={story.content} data-test-id="sb-main-component" />}</>;
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout {...page?.props}>{page}</PageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en', preview = false }) => {
  const THIRTY_DAYS = 30 * 24 * 60 * 60;

  try {
    const PageItem = await getStoryblokPage({ slug: 'not-found', locale, preview });

    return {
      props: {
        ...PageItem,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: THIRTY_DAYS,
    };
  } catch {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: THIRTY_DAYS,
    };
  }
};

export default NotFound;
