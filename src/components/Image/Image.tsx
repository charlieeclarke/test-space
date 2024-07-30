/* eslint-disable @next/next/no-img-element */
import type { ImageComponent, GetImageResponsive } from './types';

import Head from 'next/head';
import styles from './Image.module.scss';
import { createElement } from 'react';

const getImageResponsive: GetImageResponsive = (
  src,
  sizes,
  sourceSetPathFormatter,
  imageHeight,
  imageWidth,
  retina
) => {
  if (typeof src !== 'string' || !sourceSetPathFormatter) return { src };

  const imgUrl = src ?? '';
  const imgExtension = imgUrl.match(/\.(gif|jpe?g|tiff?|png|webp|avif|apng)$/i);
  const dimensionsFromPath = (path: string) => path.match(/[0-9]+x[0-9]+/g);

  const dimensionsArray = (dimensions: RegExpMatchArray | null, index: number) => {
    const [width, height] = ((dimensions && dimensions[index]) || '128x128')
      .split('x')
      .map((dimension) => Number(dimension));

    return {
      width: imageWidth || width,
      height: imageHeight || height,
    };
  };

  if (!imgExtension) {
    return { src: '' };
  }

  const srcSetSizesArr = Object.keys(sizes);
  const dimensions = dimensionsFromPath(imgUrl);
  const { width, height } = dimensionsArray(dimensions, 0);

  const imageSizes = srcSetSizesArr.map((k, i) => {
    const isLast = i === srcSetSizesArr.length - 1;
    const isFirst = i === 0;
    const width = sizes[k];
    return isLast ? `${width}vw` : `(${isFirst ? 'max' : 'min'}-width:${k}px) ${width}vw`;
  });

  let appliedSrc = src;

  const sizeMultiplier = retina ? 2 : 1;
  const imageSrcSet = srcSetSizesArr.map((k, index) => {
    // The last value will be the maximum image size..
    const isLast = index === srcSetSizesArr.length - 1;

    let path, retinaPath;

    const width = sizes[k];
    const appliedWidth = Math.round(parseInt(k, 10) * (width / 100));

    // .. therefore if a width &/or height are provided we resize the biggest image
    if (isLast) {
      path = sourceSetPathFormatter(src, imageWidth ? imageWidth : appliedWidth, imageHeight ? imageHeight : 0);
      retinaPath = sourceSetPathFormatter(
        src,
        imageWidth ? imageWidth * sizeMultiplier : appliedWidth * sizeMultiplier,
        imageHeight ? imageHeight * sizeMultiplier : 0
      );
      appliedSrc = path;
    } else {
      path = sourceSetPathFormatter(src, appliedWidth);
      retinaPath = sourceSetPathFormatter(src, appliedWidth * sizeMultiplier, 0);
    }

    if (!path) return '';

    return `${path} ${appliedWidth}w${retina ? `,${retinaPath} ${appliedWidth * sizeMultiplier}w` : ''}`;
  });

  return {
    src: appliedSrc,
    width,
    height,
    srcSet: imageSrcSet.join(', '),
    sizes: imageSizes.join(', '),
  };
};

export const Image: ImageComponent = ({
  sizes = {
    375: 100,
    767: 100,
    1024: 100,
    1400: 100,
  },
  sourceSetPathFormatter,
  src,
  alt,
  as: Alias = 'span',
  height,
  width,
  fill,
  className,
  retina = true,
  loading = 'lazy',
  preload = false,
}) => {
  const imageSrc = getImageResponsive(src, sizes, sourceSetPathFormatter, height, width, retina);

  const Component = createElement(
    Alias ?? 'span',
    {
      className: `${className} ${styles.image} ${fill ? styles.imageFill : ''}`,
    },
    <img
      alt={alt}
      src={`${imageSrc.src}`}
      srcSet={imageSrc.srcSet}
      sizes={imageSrc.sizes}
      width={imageSrc.width}
      height={imageSrc.height}
      loading={loading}
    />
  );

  return (
    <>
      <Head>{preload && <link rel="preload" as="image" imageSrcSet={imageSrc.srcSet} />}</Head>
      {Component}
    </>
  );
};

export default Image;
