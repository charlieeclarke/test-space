type GridColumnProps = {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  offsetXs?: string | number;
  offsetSm?: string | number;
  offsetMd?: string | number;
  offsetLg?: string | number;
  offsetXl?: string | number;
  className?: string;
  orderSm?: number;
  orderMd?: number;
  orderLg?: number;
  orderXl?: number;
  noColumnPadding?: boolean;
};
export type GridColumnComponent = React.FC<React.PropsWithChildren<GridColumnProps>>;
