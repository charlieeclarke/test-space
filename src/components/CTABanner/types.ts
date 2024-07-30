export type CTABannerProps = React.PropsWithChildren<{
  title: string;
  text?: string;
  cta: any;
}>;

export type CTABannerComponent = React.FC<CTABannerProps>;
