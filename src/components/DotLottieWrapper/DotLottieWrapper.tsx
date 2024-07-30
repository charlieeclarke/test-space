import React, { useEffect, useRef } from 'react';

interface IDictionary<T> {
  [key: string]: T;
}

/**
 * Convert lottie JSON file here https://dotlottie.io/resources/json-to-dotLottie/
 * and put it in place where we can link it.
 */

interface IProps {
  lottieSrc: string;
  autoplay?: boolean;
  loop?: boolean;
  styles?: IDictionary<string>;
  className?: string;
}

export const DotLottieWrapper: React.FC<IProps> = ({
  lottieSrc,
  autoplay = true,
  loop = true,
  styles = {},
  className,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    import('@dotlottie/player-component');
  });
  return (
    <div className={className}>
      <dotlottie-player ref={ref} src={lottieSrc} autoplay={autoplay} loop={loop} style={styles} />
    </div>
  );
};
