import type { HeroComponent } from './types';

import { GridColumn, Grid } from '@components/Grid';

import styles from './Hero.module.scss';
import { Image } from '@components/Image';

export const Hero: HeroComponent = ({ titles, ctas, backgroundImage, theme, sourceSetFunc }) => {
  return (
    <div className={`${styles.hero} ${theme ? styles[`u-hero-${theme.toLowerCase()}`] : ''}`}>
      {backgroundImage?.filename && (
        <Image
          className={styles.heroImage}
          alt={backgroundImage?.alt}
          src={backgroundImage?.filename}
          sourceSetPathFormatter={sourceSetFunc}
          loading="eager"
          preload
          width={1450}
          retina
        />
      )}
      <Grid>
        <GridColumn sm={'12'} md={'12'} lg={'12'}>
          <>
            {titles}
            {ctas ? <div className={styles.heroContent}>{ctas}</div> : null}
          </>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default Hero;
