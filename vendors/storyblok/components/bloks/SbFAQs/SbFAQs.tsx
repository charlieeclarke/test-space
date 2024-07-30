//? Storyblok components types
import type { SbFAQsComponent } from './types';
import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';

import dynamic from 'next/dynamic';

//? UI components
const Accordion = dynamic(() => import('@components/Accordion').then((cmp) => cmp.Accordion));
const FAQ = dynamic(() => import('@components/FAQ').then((cmp) => cmp.FAQ));

import { isArray } from '@on/utils';

export const SbFAQs: SbFAQsComponent = ({ blok }) => {
  const { faqItems: children, title } = blok;
  return (
    <FAQ title={title}>
      <Accordion {...storyblokEditable(blok as SbBlokData)}>
        {isArray(children) && children.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />)}
      </Accordion>
    </FAQ>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbFAQs;
