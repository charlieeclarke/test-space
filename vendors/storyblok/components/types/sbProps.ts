export type SbAccordionProps = {
  accordionItems?: SbAccordionItemProps[];
  _uid: string;
  component: 'Accordion';
  [k: string]: any;
};

export type SbAccordionItemProps = {
  title?: string;
  content?: any;
  _uid: string;
  component: 'AccordionItem';
  [k: string]: any;
};

export type SbMultilinkProps =
  | {
      slug?: string;
      [k: string]: any;
    }
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      linktype?: 'story';
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      linktype?: 'asset' | 'url';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      [k: string]: any;
    };

export type SbButtonProps = {
  link?: SbMultilinkProps;
  label?: string;
  variant?: '' | 'primary' | 'primaryAlt' | 'secondary' | 'secondaryAlt' | 'alternative';
  position?: '' | 'left' | 'right' | 'center';
  _uid: string;
  component: 'Button';
  [k: string]: any;
};

export type SbGlobalComponentsProps = {
  global?: (SbNavigationLinkProps | SbNavigationWrapperProps)[];
  _uid: string;
  component: 'globalcomponents';
  [k: string]: any;
};

export type SbHeadingProps = {
  ElementType?: '' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  HeadingAppearance?: '' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  Text?: string;
  _uid: string;
  component: 'Heading';
  [k: string]: any;
};

export type SbAssetProps = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
};

export type SbHeroProps = {
  theme?: '' | 'primary' | 'secondary' | 'dark';
  backgroundImage?: SbAssetProps;
  cta?: any;
  titles: any;
  _uid: string;
  component: 'Hero';
  [k: string]: any;
};

export type SbIconProps = {
  iconName?: '' | 'caret' | 'arrow' | 'tick';
  label?: string;
  width?: number;
  height?: number;
  _uid: string;
  component: 'Icon';
  [k: string]: any;
};

export type SbImageProps = {
  image?: SbAssetProps;
  maxWidth?: number;
  disableLazyLoad?: boolean;
  _uid: string;
  component: 'Image';
  [k: string]: any;
};

export type SbImageWithTextProps = {
  Image?: SbImageProps[];
  Content?: SbTextProps[];
  desktopOrder?: '' | 'imageFirst' | 'imageSecond';
  _uid: string;
  component: 'ImageWithText';
  [k: string]: any;
};

export type SbNavigationProps = {
  _uid: string;
  component: 'navigation';
  [k: string]: any;
};

export type SbNavigationLinkProps = {
  Link?: SbMultilinkProps;
  LinkName?: string;
  _uid: string;
  component: 'NavigationLink';
  [k: string]: any;
};

export type SbNavigationWrapperProps = {
  links?: SbNavigationLinkProps[];
  _uid: string;
  component: 'NavigationWrapper';
  [k: string]: any;
};

export type SbPageSEOProps = {
  _uid?: string;
  title?: string;
  plugin?: string;
  og_image?: string;
  og_title?: string;
  description?: string;
  twitter_image?: string;
  twitter_title?: string;
  og_description?: string;
  twitter_description?: string;
  [k: string]: any;
};
export type SbPageProps = {
  body?: any[];
  globalHeader?: string;
  globalFooter?: string;
  SEO?: SbPageSEOProps;
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
};

export type SbStoriesProps = {
  stories?: any[];
  highlightStory?: string;
  showPerPage?: number;
  _uid: string;
  component: 'Stories';
  [k: string]: any;
};

export type SbStoryProps = {
  globalHeader?: string;
  theme?: '' | 'default' | 'light-grey';
  title?: string;
  description?: string;
  publicationDate?: string;
  storySection?: string;
  storyImage?: SbAssetProps;
  body?: any[];
  globalFooter?: string;
  externalLink?: SbMultilinkProps;
  _uid: string;
  component: 'story';
  [k: string]: any;
};

export type SbTextProps = {
  content?: any;
  align?: '' | 'left' | 'center' | 'right';
  maxWidth?: number;
  isSectionCentered?: boolean;
  largeParagraphText?: boolean;
  _uid: string;
  component: 'Text';
  [k: string]: any;
};

export type SbBlogListProps = {
  blok: any;
};

export type SbBlogContentProps = {
  content?: string;
  globalHeader?: string;
  theme?: '' | 'default' | 'light-grey';
  title?: string;
  description?: string;
  publicationDate?: string;
  storySection?: string;
  storyImage?: SbAssetProps;
  body?: any[];
  globalFooter?: string;
  externalLink?: SbMultilinkProps;
  _uid: string;
  component: 'BlogContent';
  [k: string]: any;
};

export type SbTabsProps = {
  title?: string;
  items?: any[];
  component: 'Tabs';
  _uid: string;
};
export type SbCardGridProps = {
  component: 'CardGrid';
  _uid: string;
};
export type SbCardProps = {
  title?: string;
  image?: SbAssetProps;
  content?: string;
  label?: string;
  _uid: string;
  link?: SbMultilinkProps;
  component: 'Card';
  [k: string]: any;
};
export type SbCTABannerProps = {
  title?: string;
  text?: string;
  cta?: any;
  component: 'CTABanner';
  _uid: string;
};
export type SbImageGridProps = {
  images: any;
  variant: string;
  component: 'ImageGrid';
  _uid: string;
};
