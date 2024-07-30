import type { SbNavigation } from '~storyblok/types';

export * from './Menu/types';

export type HeaderProps = SbNavigation;
export type HeaderComponent = React.FC<HeaderProps>;
