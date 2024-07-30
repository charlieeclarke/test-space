//? Storyblok component types
import { storyblokEditable } from '@storyblok/react';
import type { SbHeadingComponent } from './types';

//? UI components
import { Heading } from '@components/Heading';

export const SbHeading: SbHeadingComponent = ({ blok }) => (
  <Heading variant={blok?.HeadingAppearance} element={blok?.ElementType} {...storyblokEditable(blok)} key={blok._uid}>
    {blok?.Text}
  </Heading>
);

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbHeading;
