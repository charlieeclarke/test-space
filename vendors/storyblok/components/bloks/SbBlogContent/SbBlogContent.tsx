//? Storyblok components types
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import type { SbBlogContentComponent } from './types';

//? UI components
import { BlogContent } from '@components/Blog/BlogContent';

export const SbBlogContent: SbBlogContentComponent = ({ blok }) => {
  return <BlogContent blok={blok} {...storyblokEditable(blok as SbBlokData)} />;
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbBlogContent;
