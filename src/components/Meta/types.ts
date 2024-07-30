import { ISbAlternateObject } from '@storyblok/react';

export type MetaProps = {
  alternates?: ISbAlternateObject[];
  title?: string;
  defaultLocale?: string;
  desc?: string;
  path?: string;
  image?: string;
  locale?: string;
  xDefault?: string;
  fullSlug?: string;
};
export type MetaComponent = React.FC<MetaProps>;
