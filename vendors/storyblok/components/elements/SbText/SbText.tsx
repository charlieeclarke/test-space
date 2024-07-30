//? Storyblok component types
import dynamic from 'next/dynamic';
import type { SbTextComponent } from './types';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

//? UI components
const RichText = dynamic(() => import('@components/RichText').then((cmp) => cmp.RichText));

export const SbText: SbTextComponent = ({ blok }) => {
  return <RichText {...blok} {...storyblokEditable(blok as SbBlokData)} key={blok._uid} />;
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbText;
