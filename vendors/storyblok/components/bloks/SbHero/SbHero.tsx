//? Storyblok components types
import type { SbHeroComponent } from './types';

import dynamic from 'next/dynamic';

//? UI components
const Hero = dynamic(() => import('@components/Hero').then((cmp) => cmp.Hero));
//? Storyblok components
import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';

export const SbHero: SbHeroComponent = ({ blok }) => {
  const { cta = [], titles = [] } = blok;
  const CTAS: React.FC = () => cta.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />);
  const Titles: React.FC = () => titles.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />);

  return (
    <Hero
      {...storyblokEditable(blok as SbBlokData)}
      {...blok}
      titles={<Titles />}
      ctas={<CTAS />}
      sourceSetFunc={getImageSourceSetPaths}
    />
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbHero;
