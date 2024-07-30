import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';
import dynamic from 'next/dynamic';

import type { SbCardGridComponent } from './types';

const CardGrid = dynamic(() => import('@components/CardGrid').then((cmp) => cmp.CardGrid));

import { isArray } from '@on/utils';

export const SbCardGrid: SbCardGridComponent = ({ blok }) => {
  const { items = [], title = '' } = blok;
  return (
    <CardGrid {...storyblokEditable(blok as SbBlokData)} title={title}>
      {isArray(items) && items.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />)}
    </CardGrid>
  );
};

export default SbCardGrid;
