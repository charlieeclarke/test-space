//? Storyblok component types
import type { SbImageComponent } from './types';

//? UI components
import { Image } from '@components/Image';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';

export const SbImage: SbImageComponent = ({ blok }) => {
  const { image, disableLazyLoad } = blok;
  if (!image) return <></>;

  const loading = blok.isEager || disableLazyLoad ? 'eager' : 'lazy';

  return (
    <Image
      sourceSetPathFormatter={getImageSourceSetPaths}
      loading={loading}
      src={image.filename}
      alt={image.alt || ''}
      as="div"
    />
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbImage;
