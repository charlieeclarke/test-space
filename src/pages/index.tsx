import type { GetStaticProps } from 'next';
import type { GetStoryStaticProps } from '~storyblok/helpers/types';

import { ReactElement } from 'react';

import { StoryblokComponent } from '@storyblok/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useDynamicStoryblokState } from '@on/hooks/useDynamicStoryblokState';

import { PageLayout } from '@layouts/PageLayout';
import { Spinner } from '@components/Spinner';
import { getStoryblokPage } from '~storyblok/graphql';
import { NextPageWithLayout } from './_app';
import { error } from 'console';

const StoryblokHomePage: NextPageWithLayout<Awaited<ReturnType<GetStoryStaticProps>>> = ({
  story: initialStory,
  resolveRelations,
}) => {
  const story = useDynamicStoryblokState(initialStory, { resolveRelations });
  if (!story?.content) {
    return <Spinner />;
  }

  return <>{story && <StoryblokComponent blok={story?.content} data-test-id="sb-main-component" />}</>;
};

StoryblokHomePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout {...page?.props}>{page}</PageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ preview = false, locale = 'en' }) => {
  try {
    const PageItem = await getStoryblokPage({ slug: '', locale, preview });
    const ONE_HOUR = 60 * 60; // 1 Hour in seconds. ❗️ Always avoid use magic numbers!

    return {
      props:
        {
          ...PageItem,
          ...(await serverSideTranslations(locale, ['common'])),
        } || {},
      revalidate: ONE_HOUR,
    };
  } catch {
    return { notFound: true };
  }
};

export default StoryblokHomePage;
