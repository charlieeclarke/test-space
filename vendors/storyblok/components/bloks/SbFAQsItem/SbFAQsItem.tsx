//? Storyblok components types
import dynamic from 'next/dynamic';
import type { SbFAQsItemComponent } from './types';

//? Storyblok components;
const AccordionItem = dynamic(() => import('@components/Accordion/AccordionItem').then((cmp) => cmp.AccordionItem));
const RichText = dynamic(() => import('@components/RichText').then((cmp) => cmp.RichText));

import { SbBlokData, storyblokEditable } from '@storyblok/react';

export const SbFAQsItem: SbFAQsItemComponent = ({ blok }) => (
  <AccordionItem title={blok.title} _uid={blok._uid} {...storyblokEditable(blok as SbBlokData)}>
    <RichText content={blok?.content} />
  </AccordionItem>
);

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbFAQsItem;
