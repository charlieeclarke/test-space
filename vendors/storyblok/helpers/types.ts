import type { SbBlokData, ISbStoriesParams, ISbStoryData } from '@storyblok/react';

export type GetStoryStaticProps = (options: {
  slug: string;
  locale: string;
  preview?: boolean;
  sbParams?: ISbStoriesParams;
  pageNumber?: number;
  resolve_relations?: string | string[];
  sortBy?: any;
  filterTag?: any;
}) => Promise<{
  story?: ISbStoryData;
  key?: number | false;
  preview: boolean;
  navigation:
    | {
        headerLinks?: any;
        footerLinks?: any;
      }
    | Record<string, never>;
  resolveRelations?: any;
  posts?: {
    items: Record<string, unknown>[];
    block: SbBlokData;
  };
  page?: number;
  total?: number;
  tags?: {
    id: number;
    full_slug: string;
    name: string;
  }[];
}>;

export type GetStoryblokDynamicDataProps = (
  content_type: string,
  blockComponent: string,
  locale: string,
  block?: any,
  preview?: boolean
) => Promise<{
  stories?: ISbStoryData[];
}>;
