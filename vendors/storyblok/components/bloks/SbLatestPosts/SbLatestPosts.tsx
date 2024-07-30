//? Storyblok components types
import type { SbLatestPostsComponent } from './types';
import dynamic from 'next/dynamic';

//? UI components
const LatestPosts = dynamic(() => import('@components/Blog/LatestPosts').then((cmp) => cmp.LatestPosts));

export const SbLatestPosts: SbLatestPostsComponent = ({ blok }) => {
  return <LatestPosts {...blok} />;
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbLatestPosts;
