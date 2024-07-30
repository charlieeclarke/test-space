export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: '' | 'section' | 'div' | 'article' | 'aside' | 'footer' | 'header';
  theme?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  rowSpacing?: number | string;
  columnSpacing?: boolean | string;
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'end'
    | 'start'
    | 'stretch'
    | 'left'
    | 'right';
  alignItems?:
    | 'center'
    | 'start'
    | 'end'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  flexDirection?: 'row' | 'column';
  scrollSnap?: boolean;
  height?: string;
  className?: string;
};

export type GridComponent = React.FC<GridProps>;
export * from './GridColumn/types';
