import type { SbNavigationItem } from '~storyblok/types';

export type MenuProps = {
  nav: SbNavigationItem[];
  media: 'mobile' | 'desktop';
};
export type MenuComponent = React.FC<MenuProps>;
