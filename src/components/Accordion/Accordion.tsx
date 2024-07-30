import type { AccordionComponent } from './types';

import { createContext } from 'react';
import { Accordion as AccordionWrapper } from 'react-accessible-accordion';

import { isArray } from '@on/utils';

import styles from './Accordion.module.scss';
import { Grid, GridColumn } from '@components/Grid';

export const InViewContext = createContext({
  inView: false,
});

export const Accordion: AccordionComponent = ({ children }) => {
  const firstAccordionItem = (isArray(children) && children[0]) || children;

  // ?: Is this div wrapper around the AccordionWrapper necessary?
  return (
    <Grid>
      <GridColumn xs={12}>
        <AccordionWrapper className={styles.accordionWrapper} preExpanded={[firstAccordionItem.key]}>
          {children}
        </AccordionWrapper>
      </GridColumn>
    </Grid>
  );
};

export default Accordion;
