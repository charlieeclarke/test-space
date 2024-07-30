/**
 * Handle fade in / reveal effects to wrapped components, on scroll.
 * The speed and fade-up distance is controllable through props.
 * Optionally set staggerIndex to set a staggered delay.
 */

import clsx from 'clsx';
import styles from './FadeInJacket.module.scss';

import { useInView } from 'react-intersection-observer';
import { FadeInJacketComponent } from './types';

const DEFAULT_THRESHOLD = 0.1;
const DEFAULT_ROOTMARGIN = '0px 0px -80px';

export const FadeInJacket: FadeInJacketComponent = ({
  threshold = DEFAULT_THRESHOLD,
  rootMargin = DEFAULT_ROOTMARGIN,
  speed,
  distanceY,
  staggerIndex,
  optional = false,
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    threshold,
    rootMargin,
  });

  const props = {
    ref,
    className: clsx(
      styles.fadeIn,
      inView && styles.active,
      optional && styles.optional,
      staggerIndex && styles.staggered
    ),
    style: {
      ...(speed && { '--_fade-in-speed': speed }),
      ...(distanceY && { '--_fade-in-distance-y': distanceY }),
      ...(staggerIndex && { '--_stagger-index': staggerIndex }),
    } as React.CSSProperties,
  };

  return <div {...props}>{children}</div>;
};

export default FadeInJacket;
