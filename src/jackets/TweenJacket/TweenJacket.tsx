/**
 * Tween between the bottom of the viewport and a pre-defined distance from the top.
 * The topThreshold can be set as either a percentage or fixed pixel value.
 * The progress value is a percentage out of 1.0,
 * and is available in the CSS variable `--tween-progress`
 */
import debounce from 'lodash.debounce';

import { useState, useEffect, useRef } from 'react';
import type { TweenJacketComponent } from './types';

// Note: this value needs to be low in order to achieve smooth animations
const DEBOUNCE_TIMEOUT = 10;
const DEFAULT_THRESHOLD = '20%';

export const TweenJacket: TweenJacketComponent = ({ topThreshold = DEFAULT_THRESHOLD, children }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const childNode = ref.current;
      if (childNode) {
        const { top } = childNode.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const topThresholdPosition =
          topThreshold.slice(-1) === '%' ? (parseInt(topThreshold) / 100) * windowHeight : parseInt(topThreshold);

        const percentage = Math.max(0, Math.min(1.0, (windowHeight - top) / (windowHeight - topThresholdPosition)));
        setScrollPercentage(percentage);
      }
    }, DEBOUNCE_TIMEOUT);

    const handleScrollEvent = (event: Event) => {
      handleScroll(event);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      handleScroll.cancel();
    };
  }, [topThreshold]);

  const props = {
    ref,
    style: {
      '--tween-progress': scrollPercentage,
    } as React.CSSProperties,
  };

  return <span {...props}>{children}</span>;
};

export default TweenJacket;
