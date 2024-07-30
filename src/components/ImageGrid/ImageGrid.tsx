import { ImageGridComponent } from './types';

import { Variant } from './Variant';
import { Grid } from '@components/Grid';

import styles from './ImageGrid.module.scss';

export const ImageGrid: ImageGridComponent = ({ images, variant }) => {
  return (
    <Grid className={styles.imageGrid}>
      {images && images?.length > 0 && <Variant images={images} variant={variant || '1'} />}
    </Grid>
  );
};

export default ImageGrid;
