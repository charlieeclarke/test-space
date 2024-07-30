import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlockScalar: { input: any; output: any; }
  ISO8601DateTime: { input: any; output: any; }
  JsonScalar: { input: any; output: any; }
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  focus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  content_string?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DataComponent = {
  __typename?: 'DataComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
};

export type DataItem = {
  __typename?: 'DataItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<DataComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type DataItems = {
  __typename?: 'DataItems';
  items?: Maybe<Array<Maybe<DataItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int']['output'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Greater than float value */
  gt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than integer value */
  gt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value */
  in?: InputMaybe<Scalars['String']['input']>;
  /** Matches any value of given array */
  in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches exactly one integer value */
  in_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Less than float value */
  lt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Less than integer value */
  lt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches all without the given value */
  not_in?: InputMaybe<Scalars['String']['input']>;
  /** Matches all without the given value */
  not_like?: InputMaybe<Scalars['String']['input']>;
};

export type GlobalcomponentsComponent = {
  __typename?: 'GlobalcomponentsComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  global?: Maybe<Scalars['BlockScalar']['output']>;
};

export type GlobalcomponentsItem = {
  __typename?: 'GlobalcomponentsItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<GlobalcomponentsComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type GlobalcomponentsItems = {
  __typename?: 'GlobalcomponentsItems';
  items?: Maybe<Array<Maybe<GlobalcomponentsItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type LegalComponent = {
  __typename?: 'LegalComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  globalFooter?: Maybe<Story>;
  globalHeader?: Maybe<Story>;
};


export type LegalComponentGlobalFooterArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type LegalComponentGlobalHeaderArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type LegalFilterQuery = {
  globalFooter?: InputMaybe<FilterQueryOperations>;
  globalHeader?: InputMaybe<FilterQueryOperations>;
};

export type LegalItem = {
  __typename?: 'LegalItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<LegalComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type LegalItems = {
  __typename?: 'LegalItems';
  items?: Maybe<Array<Maybe<LegalItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type LibraryComponent = {
  __typename?: 'LibraryComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
};

export type LibraryItem = {
  __typename?: 'LibraryItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<LibraryComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type LibraryItems = {
  __typename?: 'LibraryItems';
  items?: Maybe<Array<Maybe<LibraryItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Link = {
  __typename?: 'Link';
  cachedUrl: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fieldtype: Scalars['String']['output'];
  id: Scalars['String']['output'];
  linktype: Scalars['String']['output'];
  story?: Maybe<Story>;
  url: Scalars['String']['output'];
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']['output']>;
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type NavigationComponent = {
  __typename?: 'NavigationComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<NavigationComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type NavigationItems = {
  __typename?: 'NavigationItems';
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  SEO?: Maybe<Scalars['JsonScalar']['output']>;
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  globalFooter?: Maybe<Story>;
  globalHeader?: Maybe<Story>;
};


export type PageComponentGlobalFooterArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type PageComponentGlobalHeaderArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type PageFilterQuery = {
  globalFooter?: InputMaybe<FilterQueryOperations>;
  globalHeader?: InputMaybe<FilterQueryOperations>;
  schemaPageType?: InputMaybe<FilterQueryOperations>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PdfviewerComponent = {
  __typename?: 'PdfviewerComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Asset>;
};

export type PdfviewerItem = {
  __typename?: 'PdfviewerItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PdfviewerComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PdfviewerItems = {
  __typename?: 'PdfviewerItems';
  items?: Maybe<Array<Maybe<PdfviewerItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PostComponent = {
  __typename?: 'PostComponent';
  SEO?: Maybe<Scalars['JsonScalar']['output']>;
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  globalFooter?: Maybe<Story>;
  globalHeader?: Maybe<Story>;
  organization?: Maybe<Scalars['String']['output']>;
  relatedPosts?: Maybe<Array<Maybe<Story>>>;
  storyImage?: Maybe<Asset>;
};


export type PostComponentGlobalFooterArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type PostComponentGlobalHeaderArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type PostComponentRelatedPostsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
};

export type PostFilterQuery = {
  author?: InputMaybe<FilterQueryOperations>;
  globalFooter?: InputMaybe<FilterQueryOperations>;
  globalHeader?: InputMaybe<FilterQueryOperations>;
  organization?: InputMaybe<FilterQueryOperations>;
  relatedPosts?: InputMaybe<FilterQueryOperations>;
};

export type PostItem = {
  __typename?: 'PostItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PostComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PostItems = {
  __typename?: 'PostItems';
  items?: Maybe<Array<Maybe<PostItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DataItem?: Maybe<DataItem>;
  DataItems?: Maybe<DataItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  GlobalcomponentsItem?: Maybe<GlobalcomponentsItem>;
  GlobalcomponentsItems?: Maybe<GlobalcomponentsItems>;
  LegalItem?: Maybe<LegalItem>;
  LegalItems?: Maybe<LegalItems>;
  LibraryItem?: Maybe<LibraryItem>;
  LibraryItems?: Maybe<LibraryItems>;
  Links?: Maybe<LinkEntries>;
  NavigationItem?: Maybe<NavigationItem>;
  NavigationItems?: Maybe<NavigationItems>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  PdfviewerItem?: Maybe<PdfviewerItem>;
  PdfviewerItems?: Maybe<PdfviewerItems>;
  PostItem?: Maybe<PostItem>;
  PostItems?: Maybe<PostItems>;
  RateLimit?: Maybe<RateLimit>;
  RedirectsItem?: Maybe<RedirectsItem>;
  RedirectsItems?: Maybe<RedirectsItems>;
  Space?: Maybe<Space>;
  StoryItem?: Maybe<StoryItem>;
  StoryItems?: Maybe<StoryItems>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDataItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDataItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']['input']>;
  dimension?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeGlobalcomponentsItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeGlobalcomponentsItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLegalItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLegalItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<LegalFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLibraryItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLibraryItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavigationItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavigationItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePageItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<PageFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePdfviewerItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePdfviewerItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePostItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePostItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<PostFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeRedirectsItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeRedirectsItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeStoryItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeStoryItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<StoryFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int']['output'];
};

export type RedirectsComponent = {
  __typename?: 'RedirectsComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Scalars['BlockScalar']['output']>;
};

export type RedirectsItem = {
  __typename?: 'RedirectsItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<RedirectsComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type RedirectsItems = {
  __typename?: 'RedirectsItems';
  items?: Maybe<Array<Maybe<RedirectsItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  languageCodes: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Story = {
  __typename?: 'Story';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  firstPublishedAt?: Maybe<Scalars['String']['output']>;
  fullSlug?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  releaseId?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sortByDate?: Maybe<Scalars['String']['output']>;
  tagList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type StoryComponent = {
  __typename?: 'StoryComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<Link>;
  globalFooter?: Maybe<Story>;
  globalHeader?: Maybe<Story>;
  publicationDate?: Maybe<Scalars['String']['output']>;
  storyImage?: Maybe<Asset>;
  storySection?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type StoryComponentGlobalFooterArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type StoryComponentGlobalHeaderArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type StoryFilterQuery = {
  globalFooter?: InputMaybe<FilterQueryOperations>;
  globalHeader?: InputMaybe<FilterQueryOperations>;
  storySection?: InputMaybe<FilterQueryOperations>;
  theme?: InputMaybe<FilterQueryOperations>;
  title?: InputMaybe<FilterQueryOperations>;
};

export type StoryItem = {
  __typename?: 'StoryItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<StoryComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type StoryItems = {
  __typename?: 'StoryItems';
  items?: Maybe<Array<Maybe<StoryItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
  taggingsCount: Scalars['Int']['output'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type BlogPageQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
  per_page?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlogPageQuery = { __typename?: 'QueryType', PageItem?: { __typename?: 'PageItem', slug?: string | null, name?: string | null, first_published_at?: string | null, full_slug?: string | null, uuid?: string | null, content?: { __typename?: 'PageComponent', component?: string | null, body?: any | null, schemaPageType?: Array<string | null> | null, SEO?: any | null, globalFooter?: { __typename?: 'Story', content?: any | null } | null, globalHeader?: { __typename?: 'Story', content?: any | null } | null } | null, alternates?: Array<{ __typename?: 'Alternate', fullSlug: string, id: number, name: string, published: boolean, slug: string } | null> | null } | null, Tags?: { __typename?: 'Tags', items: Array<{ __typename?: 'Tag', name: string }> } | null, PostItems?: { __typename?: 'PostItems', total?: number | null, items?: Array<{ __typename?: 'PostItem', first_published_at?: string | null, full_slug?: string | null, slug?: string | null, tag_list?: Array<string | null> | null, name?: string | null, content?: { __typename?: 'PostComponent', _uid?: string | null, description?: string | null } | null } | null> | null } | null };

export type ContentNodeQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type ContentNodeQuery = { __typename?: 'QueryType', ContentNode?: { __typename?: 'ContentItem', alternates?: Array<{ __typename?: 'Alternate', slug: string, fullSlug: string } | null> | null } | null };

export type ContentNodesQueryVariables = Exact<{
  starts_with?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ContentNodesQuery = { __typename?: 'QueryType', ContentNodes?: { __typename?: 'ContentItems', total?: number | null, items?: Array<{ __typename?: 'ContentItem', slug?: string | null, full_slug?: string | null, created_at?: string | null, path?: string | null, published_at?: string | null, tag_list?: Array<string | null> | null, first_published_at?: string | null, translated_slugs?: Array<{ __typename?: 'TranslatedSlug', lang: string, path?: string | null, name?: string | null } | null> | null, alternates?: Array<{ __typename?: 'Alternate', slug: string, fullSlug: string } | null> | null } | null> | null } | null };

export type FeaturedPostsQueryVariables = Exact<{
  uuids?: InputMaybe<Scalars['String']['input']>;
}>;


export type FeaturedPostsQuery = { __typename?: 'QueryType', PostItems?: { __typename?: 'PostItems', total?: number | null, items?: Array<{ __typename?: 'PostItem', id?: number | null, first_published_at?: string | null, full_slug?: string | null, slug?: string | null, tag_list?: Array<string | null> | null, name?: string | null, content?: { __typename?: 'PostComponent', _editable?: string | null, _uid?: string | null, component?: string | null, description?: string | null, storyImage?: { __typename?: 'Asset', filename: string, alt?: string | null } | null } | null } | null> | null } | null };

export type LatestPostsQueryVariables = Exact<{
  per_page?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LatestPostsQuery = { __typename?: 'QueryType', PostItems?: { __typename?: 'PostItems', total?: number | null, items?: Array<{ __typename?: 'PostItem', id?: number | null, first_published_at?: string | null, full_slug?: string | null, slug?: string | null, tag_list?: Array<string | null> | null, name?: string | null, content?: { __typename?: 'PostComponent', _editable?: string | null, _uid?: string | null, component?: string | null, description?: string | null, storyImage?: { __typename?: 'Asset', filename: string, alt?: string | null } | null } | null } | null> | null } | null };

export type LegalItemQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type LegalItemQuery = { __typename?: 'QueryType', LegalItem?: { __typename?: 'LegalItem', slug?: string | null, name?: string | null, first_published_at?: string | null, full_slug?: string | null, uuid?: string | null, id?: number | null, lang?: string | null, published_at?: string | null, content?: { __typename?: 'LegalComponent', _uid?: string | null, _editable?: string | null, component?: string | null, body?: any | null, globalFooter?: { __typename?: 'Story', content?: any | null } | null, globalHeader?: { __typename?: 'Story', content?: any | null } | null } | null, alternates?: Array<{ __typename?: 'Alternate', fullSlug: string, id: number, name: string, published: boolean, slug: string } | null> | null } | null };

export type LibraryItemQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type LibraryItemQuery = { __typename?: 'QueryType', LibraryItem?: { __typename?: 'LibraryItem', slug?: string | null, name?: string | null, first_published_at?: string | null, full_slug?: string | null, uuid?: string | null, content?: { __typename?: 'LibraryComponent', component?: string | null, body?: any | null } | null } | null };

export type LinksQueryVariables = Exact<{
  starts_with?: InputMaybe<Scalars['String']['input']>;
}>;


export type LinksQuery = { __typename?: 'QueryType', Links?: { __typename?: 'LinkEntries', items: Array<{ __typename?: 'LinkEntry', isStartpage?: boolean | null, isFolder?: boolean | null, slug?: string | null }> } | null };

export type PageItemQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type PageItemQuery = { __typename?: 'QueryType', PageItem?: { __typename?: 'PageItem', slug?: string | null, name?: string | null, first_published_at?: string | null, full_slug?: string | null, uuid?: string | null, id?: number | null, lang?: string | null, published_at?: string | null, content?: { __typename?: 'PageComponent', _uid?: string | null, _editable?: string | null, component?: string | null, body?: any | null, schemaPageType?: Array<string | null> | null, SEO?: any | null, globalFooter?: { __typename?: 'Story', content?: any | null } | null, globalHeader?: { __typename?: 'Story', content?: any | null } | null } | null, alternates?: Array<{ __typename?: 'Alternate', fullSlug: string, id: number, name: string, published: boolean, slug: string } | null> | null } | null };

export type PostItemQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type PostItemQuery = { __typename?: 'QueryType', PostItem?: { __typename?: 'PostItem', slug?: string | null, name?: string | null, first_published_at?: string | null, full_slug?: string | null, uuid?: string | null, content?: { __typename?: 'PostComponent', _editable?: string | null, component?: string | null, content?: any | null, SEO?: any | null, globalFooter?: { __typename?: 'Story', content?: any | null } | null, globalHeader?: { __typename?: 'Story', content?: any | null } | null } | null, alternates?: Array<{ __typename?: 'Alternate', fullSlug: string, id: number, name: string, published: boolean, slug: string } | null> | null } | null };

export type PostsAndTagsQueryVariables = Exact<{
  per_page?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostsAndTagsQuery = { __typename?: 'QueryType', Tags?: { __typename?: 'Tags', items: Array<{ __typename?: 'Tag', name: string }> } | null, PostItems?: { __typename?: 'PostItems', total?: number | null, items?: Array<{ __typename?: 'PostItem', first_published_at?: string | null, full_slug?: string | null, slug?: string | null, tag_list?: Array<string | null> | null, name?: string | null, content?: { __typename?: 'PostComponent', _uid?: string | null, description?: string | null } | null } | null> | null } | null };


export const BlogPageDocument = gql`
    query BlogPage($slug: ID!, $per_page: Int, $page: Int, $sort_by: String, $starts_with: String, $search_term: String, $with_tag: String) {
  PageItem(id: $slug) {
    content {
      component
      body
      SEO
      globalFooter {
        content
      }
      globalHeader {
        content
      }
    }
    slug
    name
    first_published_at
    full_slug
    uuid
    alternates {
      fullSlug
      id
      name
      published
      slug
    }
  }
  Tags {
    items {
      name
    }
  }
  PostItems(
    per_page: $per_page
    page: $page
    sort_by: $sort_by
    excluding_slugs: "index/"
    starts_with: $starts_with
    search_term: $search_term
    with_tag: $with_tag
  ) {
    total
    items {
      content {
        _uid
        description
      }
      first_published_at
      full_slug
      slug
      tag_list
      name
    }
  }
}
    `;
export const ContentNodeDocument = gql`
    query ContentNode($slug: ID!) {
  ContentNode(id: $slug) {
    alternates {
      slug
      fullSlug
    }
  }
}
    `;
export const ContentNodesDocument = gql`
    query ContentNodes($starts_with: String, $page: Int, $per_page: Int) {
  ContentNodes(starts_with: $starts_with, page: $page, per_page: $per_page) {
    total
    items {
      slug
      full_slug
      created_at
      translated_slugs {
        lang
        path
        name
      }
      alternates {
        slug
        fullSlug
      }
      path
      published_at
      tag_list
      first_published_at
    }
  }
}
    `;
export const FeaturedPostsDocument = gql`
    query FeaturedPosts($uuids: String) {
  PostItems(by_uuids: $uuids) {
    total
    items {
      content {
        _editable
        _uid
        component
        description
        storyImage {
          filename
          alt
        }
      }
      id
      first_published_at
      full_slug
      slug
      tag_list
      name
    }
  }
}
    `;
export const LatestPostsDocument = gql`
    query LatestPosts($per_page: Int, $page: Int) {
  PostItems(per_page: $per_page, page: $page, sort_by: "first_published_at:desc") {
    total
    items {
      content {
        _editable
        _uid
        component
        description
        storyImage {
          filename
          alt
        }
      }
      id
      first_published_at
      full_slug
      slug
      tag_list
      name
    }
  }
}
    `;
export const LegalItemDocument = gql`
    query LegalItem($slug: ID!) {
  LegalItem(id: $slug) {
    slug
    name
    first_published_at
    full_slug
    uuid
    id
    lang
    published_at
    content {
      _uid
      _editable
      component
      body
      globalFooter {
        content
      }
      globalHeader {
        content
      }
    }
    alternates {
      fullSlug
      id
      name
      published
      slug
    }
  }
}
    `;
export const LibraryItemDocument = gql`
    query LibraryItem($slug: ID!) {
  LibraryItem(id: $slug) {
    content {
      component
      body
    }
    slug
    name
    first_published_at
    full_slug
    uuid
  }
}
    `;
export const LinksDocument = gql`
    query Links($starts_with: String) {
  Links(starts_with: $starts_with) {
    items {
      isStartpage
      isFolder
      slug
    }
  }
}
    `;
export const PageItemDocument = gql`
    query PageItem($slug: ID!) {
  PageItem(id: $slug) {
    slug
    name
    first_published_at
    full_slug
    uuid
    id
    lang
    published_at
    content {
      _uid
      _editable
      component
      body
      SEO
      globalFooter {
        content
      }
      globalHeader {
        content
      }
    }
    alternates {
      fullSlug
      id
      name
      published
      slug
    }
  }
}
    `;
export const PostItemDocument = gql`
    query PostItem($slug: ID!) {
  PostItem(id: $slug) {
    content {
      _editable
      component
      content
      SEO
      globalFooter {
        content
      }
      globalHeader {
        content
      }
    }
    slug
    name
    first_published_at
    full_slug
    uuid
    alternates {
      fullSlug
      id
      name
      published
      slug
    }
  }
}
    `;
export const PostsAndTagsDocument = gql`
    query PostsAndTags($per_page: Int, $page: Int, $sort_by: String, $starts_with: String, $search_term: String, $with_tag: String) {
  Tags {
    items {
      name
    }
  }
  PostItems(
    per_page: $per_page
    page: $page
    sort_by: $sort_by
    excluding_slugs: "index/"
    starts_with: $starts_with
    search_term: $search_term
    with_tag: $with_tag
  ) {
    total
    items {
      content {
        _uid
        description
      }
      first_published_at
      full_slug
      slug
      tag_list
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    BlogPage(variables: BlogPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BlogPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPageQuery>(BlogPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPage', 'query', variables);
    },
    ContentNode(variables: ContentNodeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentNodeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentNodeQuery>(ContentNodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContentNode', 'query', variables);
    },
    ContentNodes(variables?: ContentNodesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentNodesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentNodesQuery>(ContentNodesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContentNodes', 'query', variables);
    },
    FeaturedPosts(variables?: FeaturedPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FeaturedPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FeaturedPostsQuery>(FeaturedPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FeaturedPosts', 'query', variables);
    },
    LatestPosts(variables?: LatestPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LatestPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LatestPostsQuery>(LatestPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LatestPosts', 'query', variables);
    },
    LegalItem(variables: LegalItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LegalItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LegalItemQuery>(LegalItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LegalItem', 'query', variables);
    },
    LibraryItem(variables: LibraryItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LibraryItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LibraryItemQuery>(LibraryItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LibraryItem', 'query', variables);
    },
    Links(variables?: LinksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LinksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LinksQuery>(LinksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Links', 'query', variables);
    },
    PageItem(variables: PageItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageItemQuery>(PageItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PageItem', 'query', variables);
    },
    PostItem(variables: PostItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostItemQuery>(PostItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostItem', 'query', variables);
    },
    PostsAndTags(variables?: PostsAndTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostsAndTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsAndTagsQuery>(PostsAndTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostsAndTags', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;