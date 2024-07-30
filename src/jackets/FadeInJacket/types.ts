export type FadeInJacketProps = React.PropsWithChildren<{
  threshold?: number;
  rootMargin?: string;
  speed?: string;
  distanceY?: string;
  staggerIndex?: number;
  optional?: boolean;
}>;

export type FadeInJacketComponent = React.FC<FadeInJacketProps>;
