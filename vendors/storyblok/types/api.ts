import { ISbStoryData } from '@storyblok/react';

export type SbNavigationItem = {
  id: string;
  slug: string;
  name: string;
  parentId: number;
  linktype: string;
};
export type SbNavigationItems = SbNavigationItem[];

export type SbNavigation = {
  navigation?: {
    headerLinks?: SbNavigationItems[];
    footerLinks?: SbNavigationItems[];
    headerMegaMenu?: SbNavigationItems[];
  };
};

export type SbAPILink = {
  id: number;
  slug: string;
  name: string;
  is_folder: boolean;
  parent_id: number;
  published: boolean;
  position: number;
  uuid: string;
  is_startpage: boolean;
  real_path: string;
};

export type SbAPILinks = {
  [uuid: string]: SbAPILink;
};

export type SbSEO = {
  title: string;
  description: string;
  [key: string]: any;
};

export type SbLayoutPage = ISbStoryData<{
  og_image: { filename: string };
  SEO: SbSEO;
  styles: Record<string, any>;
}>;

export type SbSpace = {
  id: number;
  name: string;
  domain: string;
  version: number;
  language_codes: string[];
};

export type SbResult<RootKey extends string, ResultType> = ResultType extends Array<infer Type>
  ? {
      data: {
        [rk in RootKey]: {
          [key: string]: Type;
        };
      };
    }
  : {
      data: {
        [rk in RootKey]: ResultType;
      };
    };
export type SbAPIGetStory = SbResult<'story', ISbStoryData>;
export type SbAPIGetStories = SbResult<'stories', SbStory[]>;
export type SbAPIGetLinks = SbResult<'links', SbLink[]>;

export type SbStory = {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  default_full_slug: null;
  created_at: Date;
  published_at: Date;
  first_published_at: Date;
  release_id: null;
  lang: string;
  content: SbContent;
  position: number;
  is_startpage: boolean;
  parent_id: number;
  group_id: string;
  translated_slugs: SbTranslatedSlug[];
  alternates: SbAlternate[];
};

export type SbAlternate = {
  id: number;
  name: string;
  slug: string;
  full_slug: string;
  is_folder: boolean;
  parent_id: number;
};

export type SbContent = {
  component: string;
};

export type SbTranslatedSlug = {
  path: string;
  name: string;
  lang: string;
};

export type SbLink = {
  id: number;
  slug: string;
  name: string;
  is_folder: boolean;
  parent_id: number;
  published: boolean;
  position: number;
  uuid: string;
  is_startpage: boolean;
};
