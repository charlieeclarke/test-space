/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import '@dotlottie/player-component';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * WHY?
 *
 * Playing lottie animations on the background costs a lot,
 * using this for heavy lottie files will decrease performance issues
 *
 * you might also want think to render the lottie file on the client side
 *
 *
 *
    const DynamicDotLottieWrapper = dynamic(() => import('./DotLottieWrapper'), {
      suspense: true,
    });

    export default function Lottie(props) {
      return (
        <Suspense fallback={`Loading...`}>
          <DynamicDotLottieWrapper {...props} />
        </Suspense>
      );
    }
 *
 *
 */

interface IDictionary<T> {
  [key: string]: T;
}

interface IProps {
  lottieSrc: string;
  autoplay?: boolean;
  loop?: boolean;
  styles?: IDictionary<string>;
  className?: string;
}

const DotLottieWrapper: React.FC<IProps> = ({ lottieSrc, autoplay = true, loop = true, styles = {}, className }) => {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    import('@dotlottie/player-component');
  }, []);

  useEffect(() => {
    if (lottieRef.current?.play) {
      inView ? lottieRef.current.play() : lottieRef.current.pause();
    }
  }, [inView]);

  return (
    <div className={className}>
      <div ref={ref}>
        <dotlottie-player ref={lottieRef} src={lottieSrc} autoplay={autoplay} loop={loop} style={styles} />
      </div>
    </div>
  );
};

export default DotLottieWrapper;
