import type { SbNavigationItems } from '~storyblok/types';

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  navigation?: SbNavigationItems[];
};

export type FooterComponent = React.FC<FooterProps>;

export * from './FooterLinks/types';
export * from './FooterSocial/types';
