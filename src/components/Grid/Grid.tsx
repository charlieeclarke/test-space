import type { GridComponent } from './types';

import styles from './Grid.module.scss';

// TODO: add documentation

export const Grid: GridComponent = ({
  as,
  theme,
  children,
  fullWidth,
  fullHeight,
  rowSpacing,
  flexDirection,
  columnSpacing,
  justify,
  alignItems,
  scrollSnap,
  height,
  className,
  ...rest
}) => {
  const Component = as || 'div';

  // Control your grid layout either by passing props
  // Or by using the same CSS variables in your component CSS
  const stylesToApply = {
    style: {
      ...(rowSpacing && { '--row-gap': rowSpacing }),
      ...(columnSpacing && { '--column-gap': columnSpacing }),
      ...(justify && { '--justify': justify }),
      ...(alignItems && { '--align-items': alignItems }),
      ...(flexDirection && { '--flex-direction': flexDirection }),
      ...(height && { minHeight: height, '--grid-size': height }),
    } as React.CSSProperties,
  };

  const classes = [
    styles.grid,
    theme && `u-${theme.toLowerCase()}`,
    fullWidth && styles.gridFullWidth,
    fullHeight && styles.gridFullHeight,
    scrollSnap && styles.gridScrollSnap,
    flexDirection === 'column' && styles.gridVertical,
    className,
  ].filter(Boolean);

  return (
    <Component className={classes.join(' ')} {...rest}>
      <div className={styles.row} {...stylesToApply}>
        {children}
      </div>
    </Component>
  );
};

export default Grid;
