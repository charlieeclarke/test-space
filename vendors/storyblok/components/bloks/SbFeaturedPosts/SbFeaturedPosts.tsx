//? Storyblok components types
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import type { SbFeaturedPostsComponent } from './types';
import dynamic from 'next/dynamic';

//? UI components
const FeaturedPosts = dynamic(() => import('@components/Blog/FeaturedPosts').then((cmp) => cmp.FeaturedPosts));

export const SbFeaturedPosts: SbFeaturedPostsComponent = ({ blok }) => {
  return <FeaturedPosts {...storyblokEditable(blok as SbBlokData)} {...blok} />;
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbFeaturedPosts;
