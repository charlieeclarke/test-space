//? Storyblok component types
import type { SbPageComponent } from './types';

//? Type guards
import { isArray } from '@on/utils';
//? React hooks
import { StoryblokComponent } from '@storyblok/react';

//? Storyblok components

export const SbPage: SbPageComponent = ({ blok }) => {
  return (
    <div>
      {isArray(blok.body) &&
        blok.body.map((nestedBlok: any) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />)}
    </div>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbPage;
