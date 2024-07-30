export type SlideCoverJacketProps = React.PropsWithChildren<{
  top?: string;
  fanTop?: string;
}>;

export type SlideCoverJacketInnerProps = React.PropsWithChildren<object>;

export type SlideCoverJacketComponent = React.FC<SlideCoverJacketProps>;
export type SlideCoverJacketInnerComponent = React.FC<SlideCoverJacketProps>;
