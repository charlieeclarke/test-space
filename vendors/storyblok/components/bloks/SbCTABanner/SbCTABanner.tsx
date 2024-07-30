import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';
import dynamic from 'next/dynamic';

import type { SbCTABannerComponent } from './types';

const CTABanner = dynamic(() => import('@components/CTABanner').then((cmp) => cmp.CTABanner));

export const SbCTABanner: SbCTABannerComponent = ({ blok }) => {
  const { cta } = blok;
  const CTA: React.FC = () => cta.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />);

  return <CTABanner {...storyblokEditable(blok as SbBlokData)} {...blok} cta={<CTA />} />;
};

export default SbCTABanner;
