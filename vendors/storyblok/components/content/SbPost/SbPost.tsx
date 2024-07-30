//? Storyblok component types
import type { SbBlogComponent } from './types';

//? React hooks
import { isArray } from '@on/utils';

//? Storyblok
import { StoryblokComponent } from '@storyblok/react';

//? UI components
import { SbBlogContent } from '../../bloks/SbBlogContent/SbBlogContent';

export const SbPost: SbBlogComponent = ({ blok }) => {
  return (
    <div>
      <SbBlogContent blok={blok} _uid={blok._uid} component={'BlogContent'} />
      {isArray(blok.body) &&
        blok.body.map((nestedBlok: any) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />)}
    </div>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbPost;
