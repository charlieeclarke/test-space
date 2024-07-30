import type { SbNavigation } from '~storyblok/types';
import type { MetaProps } from '@components/Meta/types';
import { ISbStoryData } from '@storyblok/react';

export type LayoutProps = React.PropsWithChildren<
  SbNavigation & {
    meta?: MetaProps;
    slug?: string;
    library?: boolean;
    preview?: boolean;
    story?: ISbStoryData & {
      navigation?: any;
    };
  }
>;
export type PageLayoutType = React.FC<LayoutProps>;
