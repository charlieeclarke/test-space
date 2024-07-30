import type { GetStaticProps } from 'next';
import type { GetStoryStaticProps } from '~storyblok/helpers/types';

import { ReactElement } from 'react';

import { StoryblokComponent, useStoryblokState } from '@storyblok/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageLayout } from '@layouts/PageLayout';
import { Spinner } from '@components/Spinner';
import { getStoryblokPage } from '~storyblok/graphql';
import { NextPageWithLayout } from './_app';

const ContactPage: NextPageWithLayout<Awaited<ReturnType<GetStoryStaticProps>>> = ({
  story: initialStory,
  resolveRelations,
}) => {
  const story = useStoryblokState(initialStory, { resolveRelations: resolveRelations });

  if (!story.content) {
    return <Spinner />;
  }

  return <>{story && <StoryblokComponent blok={story.content} data-test-id="sb-main-component" />}</>;
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout {...page?.props}>{page}</PageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ preview = false, locale = 'en' }) => {
  try {
    const PageItem = await getStoryblokPage({ slug: 'contact-us', locale, preview });
    const ONE_DAY = 1 * 24 * 60 * 60; // 1 day in seconds. ❗️ Always avoid use magic numbers!

    return {
      props: {
        ...PageItem,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: ONE_DAY,
    };
  } catch {
    return { notFound: true };
  }
};

export default ContactPage;
