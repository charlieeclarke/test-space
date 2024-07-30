import React, { useState } from 'react';
import styles from './Carousel.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { CarouselComponent } from './types';

/**
 * @param options https://keen-slider.io/docs#options
 * @returns
 */

export const Carousel: CarouselComponent = ({ children, options }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...options,
  });

  if (!children) return null;

  return (
    <>
      <div className={styles.sliderWrapper}>
        <div ref={sliderRef} className="keen-slider">
          {children &&
            React.Children.map(children, (child: any) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              return <div className="keen-slider__slide">{React.cloneElement(child)}</div>;
            })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles.dots}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                title={`Move to slide number ${idx}`}
                type="button"
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`${styles.dot} ${currentSlide === idx ? styles.dotActive : ''}`}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${props.left ? styles['arrow--left'] : styles['arrow--right']} ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

export default Carousel;
