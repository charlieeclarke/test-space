import clsx from 'clsx';

import type { GridColumnComponent } from './types';

import styles from '../Grid.module.scss';

/*
  Notes on usage:
  - If `xs` breakpoint isn't set, it's assumed to be full width
  - If `sm` breakpoint isn't set, it inherits from `xs`
  - If `md` breakpoint isn't set, it inherits from `sm`
  - If `lg` breakpoint isn't set, it inherits from `md`
  - If `xl` breakpoint isn't set, it inherits from `lg`

  Offset can be used in the same way to create empty columns
  - E.g. offsetSm={2} offsetLg={4}

  Order can be used to arrange the order of content across breakpoints
  Default ordering should be as per mobile
  Ordering applies upwards
  - `orderSm` can be used to reorder columns on tablet
  - `orderMd` can be used to reorder columns on desktop
  - `orderLg` can be used to reorder columns on desktop large
  - `orderXl` can be used to reorder columns on desktop extra large
*/

export const GridColumn: GridColumnComponent = ({
  children,
  xs = styles.columns,
  sm,
  md,
  lg,
  xl,
  offsetXs = 0,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  className,
  orderSm,
  orderMd,
  orderLg,
  orderXl,
  noColumnPadding,
}) => {
  const nodeStyles = {
    ...(noColumnPadding && { padding: `0` }),
  } as React.CSSProperties;

  const effectiveSm = sm !== undefined ? sm : xs;
  const effectiveMd = md !== undefined ? md : sm;
  const effectiveLg = lg !== undefined ? lg : md;
  const effectiveXl = xl !== undefined ? xl : lg;
  const effectiveOffsetSm = offsetSm !== undefined ? offsetSm : offsetXs;
  const effectiveOffsetMd = offsetMd !== undefined ? offsetMd : offsetSm;
  const effectiveOffsetLg = offsetLg !== undefined ? offsetLg : offsetMd;
  const effectiveOffsetXl = offsetXl !== undefined ? offsetXl : offsetLg;

  return (
    <div
      className={clsx(
        styles[`column`],
        styles[`column-${xs}`],
        sm !== undefined && styles[`column-sm-${effectiveSm}`],
        md !== undefined && styles[`column-md-${effectiveMd}`],
        lg !== undefined && styles[`column-lg-${effectiveLg}`],
        xl !== undefined && styles[`column-xl-${effectiveXl}`],
        offsetXs && styles[`offset-${offsetXs}`],
        offsetSm !== undefined && styles[`offset-sm-${effectiveOffsetSm}`],
        offsetMd !== undefined && styles[`offset-md-${effectiveOffsetMd}`],
        offsetLg !== undefined && styles[`offset-lg-${effectiveOffsetLg}`],
        offsetXl !== undefined && styles[`offset-xl-${effectiveOffsetXl}`],
        orderSm && styles[`column-order-sm-${orderSm || 0}`],
        orderMd && styles[`column-order-md-${orderMd || 0}`],
        orderLg && styles[`column-order-lg-${orderLg || 0}`],
        orderXl && styles[`column-order-xl-${orderXl || 0}`],
        className
      )}
      style={nodeStyles}
    >
      {children}
    </div>
  );
};
export default GridColumn;
