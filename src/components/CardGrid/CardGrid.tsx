import { Grid, GridColumn } from '@components/Grid';
import React, { ReactElement } from 'react';
import styles from './CardGrid.module.scss';

import { CardGridComponent } from './types';

export const CardGrid: CardGridComponent = ({ title, children }) => {
  const Container = title ? 'section' : 'div';

  return (
    <Container className={styles.root}>
      {title && (
        <Grid>
          <GridColumn>
            <h3 className={styles.root__title}>{title}</h3>
          </GridColumn>
        </Grid>
      )}
      <Grid>
        {children &&
          React.Children.map(children, (child: any) => {
            return <GridColumn md={4}>{React.cloneElement(child as ReactElement)}</GridColumn>;
          })}
      </Grid>
    </Container>
  );
};

export default CardGrid;
