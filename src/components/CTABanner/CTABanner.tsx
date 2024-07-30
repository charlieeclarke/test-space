import styles from './CTABanner.module.scss';

import { GridColumn, Grid } from '@components/Grid';

import { CTABannerComponent } from './types';

export const CTABanner: CTABannerComponent = ({ title, text, cta }) => {
  return (
    <Grid as={'section'} className={styles.CTABanner}>
      <GridColumn xs={12} md={10} offsetMd={1} className={styles.content}>
        <div className={styles.textContent}>
          <h3>{title}</h3>
          {text && <p>{text}</p>}
        </div>
        {cta}
      </GridColumn>
    </Grid>
  );
};

export default CTABanner;
