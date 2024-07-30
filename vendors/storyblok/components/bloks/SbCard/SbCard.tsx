//? Storyblok components types
import type { SbCardComponent } from './types';
import dynamic from 'next/dynamic';

//? Type guards
import { isArray } from '@on/utils';
import type { SbButtonProps, SbImageProps } from '../../types';

//? UI components
const Card = dynamic(() => import('@components/Card').then((cmp) => cmp.Card));

import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const SbCard: SbCardComponent = ({ blok }) => {
  const { image = [], link = [] } = blok;

  /**
   *  Whilst block allows multiple CTAs - we assume the first would be for image linking
   *  Amend Storyblok to restrict to a single CTA if appropriate
   * */
  const firstLink = link.length > 0 ? link[0].link : null;

  const getChildBlok = (children: SbImageProps[] | SbButtonProps[]) =>
    isArray(children) && children.map((child) => <StoryblokComponent blok={child} key={child._uid} />);

  return (
    <Card
      {...blok}
      _uid={blok._uid}
      {...storyblokEditable(blok as SbBlokData)}
      link={firstLink}
      cta={link && getChildBlok(link as SbButtonProps[])}
    >
      {image && getChildBlok(image as SbImageProps[])}
    </Card>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbCard;
