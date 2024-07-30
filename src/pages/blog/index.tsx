import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';

import { Spinner } from '@components/Spinner';
import { BlogList } from '@components/Blog/BlogList/BlogList';
import { PageLayout } from '@layouts/PageLayout';
import { BlogLayout } from '@layouts/BlogLayout';

import type { GetStoryStaticProps } from '~storyblok/helpers/types';
import { getStoryblokBlog } from '~storyblok/graphql';
import { NextPageWithLayout } from '@pages/_app';

export async function getServerSideProps(context) {
  const query = context?.query;
  const locale = context?.locale;

  const querySort = query?.sort;
  const queryTag = query?.tag;
  const searchTerm = query?.s;
  const preview = context?.preview;

  try {
    const data = await getStoryblokBlog({
      slug: 'blog',
      locale: locale.toLowerCase(),
      preview,
      variables: {
        starts_with: `${locale.toLowerCase()}/`,
        page: 1,
        per_page: 10,
        ...(querySort && { sort_by: querySort }),
        ...(queryTag && { with_tag: queryTag }),
        ...(searchTerm && { search_term: searchTerm }),
      },
    });

    return {
      props: {
        ...data,
        blog: {
          ...data?.blog,
          pageNumber: 1,
        },
        ...(await serverSideTranslations(`${locale}`, ['common', 'footer'])),
      },
    };
  } catch {
    return { notFound: true };
  }
}

export const BlogPage: NextPageWithLayout<{ slug: string; blog?: any } & Awaited<ReturnType<GetStoryStaticProps>>> = ({
  story,
  resolveRelations,
  blog,
}) => {
  story = useStoryblokState(story, { resolveRelations });
  const { locale } = useRouter();

  const haveBlogData = blog?.PostItems?.items;

  if (!story?.content || !haveBlogData) {
    return <Spinner />;
  }

  return (
    <>
      {story && (
        <StoryblokComponent
          blok={story.content}
          name={story?.name}
          publishDate={story?.published_at}
          storyTags={story?.tag_list}
          locale={locale}
        />
      )}
      {haveBlogData && (
        <BlogList posts={blog.PostItems?.items} pagination posts_per_page={10} total={blog.PostItems?.total} page={1} />
      )}
    </>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout {...page?.props}>
      <BlogLayout blog={page?.props?.blog}>{page}</BlogLayout>
    </PageLayout>
  );
};

export default BlogPage;
