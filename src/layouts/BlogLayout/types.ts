import { PostsAndTagsQuery } from '~storyblok/_generated/storyblokSdk';

export type LayoutProps = React.PropsWithChildren<{
  blog?: PostsAndTagsQuery;
}>;
export type BlogLayoutType = React.FC<LayoutProps>;
