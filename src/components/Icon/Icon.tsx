import type { IconComponent } from './types';
import styles from './Icon.module.scss';

export const Icon: IconComponent = ({
  iconName,
  width = '23',
  height = '23',
  viewBox = '0 0 25 24',
  stroke = 'var(--black)',
  fill = 'none',
  label,
}) => {
  const component = (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" stroke={stroke} fill={fill}>
      <use href={`#icon-${iconName || 'caret'}`} />
    </svg>
  );

  return label ? (
    <div className={styles.iconWrapper}>
      {component}
      <span>{label}</span>
    </div>
  ) : (
    component
  );
};

export default Icon;
