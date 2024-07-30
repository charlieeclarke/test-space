import { PageItem, PostItem } from '~storyblok/_generated/storyblokSdk';

export type GetStoryblokPage = {
  slug: string;
  locale: string;
  contentType: PageItem | PostItem;
};

export type StoryblokPageItem = {
  story: PageItem;
  navigation?: any;
};

export type StoryblokBlogItem = {
  story: PageItem;
  navigation?: any;
  blog?: any;
};
