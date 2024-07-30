import type { StaticImageData } from 'next/image';

export type StaticImport = { default: StaticImageData } | StaticImageData;
export type ImageSrc = string | StaticImport;

export interface SrcSetImage {
  width: number;
  path: string;
}

export type ImageSizes = Record<number, number>;

export type GetImageResponsive = (
  src: ImageSrc,
  sizes: ImageSizes,
  sourceSetPathFormatter: (path: string, width: any, height?: number) => string,
  imageHeight?: number,
  imageWidth?: number,
  retina?: boolean
) => {
  srcSet?: string;
  src: string | ImageSrc;
  width?: number;
  height?: number;
  sizes?: string;
};

type ImageComponentProps = {
  alt?: string;
  src: ImageSrc;
  sizes?: ImageSizes;
  sourceSetPathFormatter?: (path: string, width: any, height?: number) => string;
  width?: number;
  height?: number;
  as?: string;
  fill?: boolean;
  retina?: boolean;
  preload?: boolean;
  loading?: 'eager' | 'lazy';
  className?: any;
};

export type ImageComponent = React.FC<ImageComponentProps>;
