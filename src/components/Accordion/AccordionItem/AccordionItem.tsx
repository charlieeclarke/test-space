import type { AccordionItemComponent } from './types';

import {
  AccordionItem as AccordionItemWrapper,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './AccordionItem.module.scss';

export const AccordionItem: AccordionItemComponent = ({ children, title, _uid }) => {
  return (
    <AccordionItemWrapper className={styles.accordionItem} uuid={_uid} role="listitem">
      <AccordionItemHeading className={styles.accordionItemHeading}>
        <AccordionItemButton className={styles.accordionItemButton}>{title}</AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel className={styles.accordionItemPanel}>{children}</AccordionItemPanel>
    </AccordionItemWrapper>
  );
};
export default AccordionItem;
