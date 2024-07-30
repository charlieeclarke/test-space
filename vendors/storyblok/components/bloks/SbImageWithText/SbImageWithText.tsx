//? Storyblok component types
import type { SbImageWithTextComponent } from './types';
import dynamic from 'next/dynamic';

//? Type guards
import { isArray } from '@on/utils';

//? UI components
const ImageWithTextContent = dynamic(() =>
  import('@components/ImageWithTextContent').then((cmp) => cmp.ImageWithTextContent)
);

//? Storyblok components
import { StoryblokComponent } from '@storyblok/react';
import type { SbImageProps, SbTextProps } from '../../types';

export const SbImageWithText: SbImageWithTextComponent = ({ blok }) => {
  const { Image, Content, desktopOrder } = blok;

  const getChildBlok = (children: SbImageProps[] | SbTextProps[]) =>
    isArray(children) && children.map((child) => <StoryblokComponent blok={child} key={child._uid} />);

  return (
    <ImageWithTextContent imageLast={desktopOrder === 'imageSecond'}>
      {Image && getChildBlok(Image as SbImageProps[])}
      {Content && getChildBlok(Content as SbImageProps[])}
    </ImageWithTextContent>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbImageWithText;
