import styles from './FAQ.module.scss';

import { GridColumn, Grid } from '@components/Grid';

import { FAQComponent } from './types';

export const FAQ: FAQComponent = ({ children, title }) => {
  return (
    <article className={styles.root}>
      <Grid justify="center">
        <GridColumn sm={12} md={6}>
          <h3 className={styles.root__title}>{title}</h3>
          {children}
        </GridColumn>
      </Grid>
    </article>
  );
};

export default FAQ;
