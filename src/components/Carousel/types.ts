import { KeenSliderOptions } from 'keen-slider/react';

export type CarouselProps = {
  options?: KeenSliderOptions;
};

export type CarouselComponent = React.FC<React.PropsWithChildren<CarouselProps>>;
