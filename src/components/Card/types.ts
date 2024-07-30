import { SbAssetProps, SbMultilinkProps } from '~storyblok/components/types';

export type CardProps = React.PropsWithChildren<{
  title?: string;
  image?: SbAssetProps;
  content?: string;
  label?: string;
  _uid: string;
  link?: SbMultilinkProps;
  cta?: React.ReactNode;
}>;
export type CardComponent = React.FC<CardProps>;
