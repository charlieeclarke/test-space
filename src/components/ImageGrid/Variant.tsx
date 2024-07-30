import type { VariantComponent } from './types';
import { GridColumn } from '@components/Grid';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';
import { Image } from '@components/Image';

import styles from './ImageGrid.module.scss';
import clsx from 'clsx';

export const Variant: VariantComponent = ({ images, variant }) => {
  if (!images || !images?.length) return null;

  const variantData = (imageIndex = 0) => {
    const index = imageIndex + 1;
    let imageSet = []; // Slice the images array to only use the necessary amount
    let columnData = { xs: 12, offsetXs: 0, md: 4, offsetMd: 4 }; // Set the data for each image

    switch (variant) {
      case '1': // 1 image
        imageSet = images.slice(0, 1);
        columnData;
        break;
      case '2': // 2 images
        imageSet = images.slice(0, 2);
        if (index === 1) {
          columnData = { xs: 6, offsetXs: 0, md: 4, offsetMd: 2 };
        } else {
          columnData = { xs: 10, offsetXs: 2, md: 4, offsetMd: 0 };
        }
        break;
      case '3': // 3 images
        imageSet = images.slice(0, 3);
        if (index === 1) {
          columnData = { xs: 6, offsetXs: 6, md: 3, offsetMd: 0 };
        } else if (index === 2) {
          columnData = { xs: 8, offsetXs: 0, md: 6, offsetMd: 0 };
        } else {
          columnData = { xs: 6, offsetXs: 6, md: 3, offsetMd: 0 };
        }
        break;
      case '4': // 4 images
        imageSet = images.slice(0, 4);
        if (index === 1) {
          columnData = { xs: 10, offsetXs: 1, md: 5, offsetMd: 1 };
        } else if (index === 2) {
          columnData = { xs: 5, offsetXs: 0, md: 5, offsetMd: 0 };
        } else if (index === 3) {
          columnData = { xs: 7, offsetXs: 0, md: 5, offsetMd: 1 };
        } else {
          columnData = { xs: 7, offsetXs: 1, md: 5, offsetMd: 0 };
        }
        break;
    }
    return { imageSet, columnData };
  };

  return variantData().imageSet.map((image: any, imageIndex: number) => (
    <GridColumn
      key={`imageGridVariant-${image._uid}`}
      {...variantData(imageIndex).columnData}
      className={clsx([styles[`variant${variant}`], styles[`column${imageIndex + 1}`]])}
    >
      <Image
        className={styles.image}
        alt={image?.image.alt}
        src={image?.image.filename}
        sourceSetPathFormatter={getImageSourceSetPaths}
      />
    </GridColumn>
  ));
};

export default Variant;
