export type BreakoutProps = React.PropsWithChildren<{
  //
  pinLeft?: boolean;
  pinRight?: boolean;
  fullWidth?: boolean;
}>;

export type BreakoutComponent = React.FC<BreakoutProps>;
