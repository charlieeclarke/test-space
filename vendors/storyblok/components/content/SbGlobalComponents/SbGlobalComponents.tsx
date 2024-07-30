//? Storyblok component types
import type { SbGlobalComponentsComponent } from './types';

//? React hooks
import { StoryblokComponent } from '@storyblok/react';

//? Storyblok components

export const SbGlobalComponents: SbGlobalComponentsComponent = ({ blok }) => {
  return <StoryblokComponent blok={blok} key={blok._uid} />;
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbGlobalComponents;
