export type ImageGridProps = React.PropsWithChildren<{
  images: any;
  variant: string;
}>;

export type ImageGridComponent = React.FC<ImageGridProps>;

type VariantProps = {
  images: any;
  variant: string;
};

export type VariantComponent = React.FC<VariantProps>;
