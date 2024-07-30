import { SbBlokData, storyblokEditable } from '@storyblok/react';

import type { SbImageGridComponent } from './types';

import { ImageGrid } from '@components/ImageGrid';

export const SbImageGrid: SbImageGridComponent = ({ blok }) => {
  return <ImageGrid {...storyblokEditable(blok as SbBlokData)} {...blok} />;
};

export default SbImageGrid;
