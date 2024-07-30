/**
 * Slide each child div over the previous, instead of displaying linearly.
 * Note that each slide must be less than the viewport height:
 * it is possible to add `overflow-y: auto`, but the scrolling is a bit weird.
 */

import styles from './SlideCoverJacket.module.scss';

import { Children } from 'react';
import { SlideCoverJacketComponent } from './types';

export const SlideCoverJacket: SlideCoverJacketComponent = ({ top, fanTop, children }) => {
  const parentProps = {
    className: styles.cover,
    style: {
      ...(top && { '--_slide-cover-top': top }),
      ...(fanTop && { '--_slide-cover-stagger': fanTop }),
    } as React.CSSProperties,
  };

  return (
    <div {...parentProps}>
      {Children.map(children, (child, index) => (
        <span className={styles.child} style={{ '--index': index } as React.CSSProperties}>
          {child}
        </span>
      ))}
    </div>
  );
};

export default SlideCoverJacket;
