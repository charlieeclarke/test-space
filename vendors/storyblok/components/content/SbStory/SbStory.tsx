//? Storyblok component types
import type { SbStoryComponent } from './types';

//? React hooks
import { isArray } from '@on/utils';

//? Storyblok
import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const SbStory: SbStoryComponent = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      {isArray(blok.body) &&
        blok.body.map((nestedBlok: any) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />)}
    </div>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbStory;
