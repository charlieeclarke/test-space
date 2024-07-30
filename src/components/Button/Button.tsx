import type { ButtonComponent } from './types';

import { Link } from '@components/Link';

import styles from './Button.module.scss';
import clsx from 'clsx';

export const Button: ButtonComponent = ({
  align,
  children = '',
  title = '',
  className = '',
  href,
  disabled = false,
  type,
  variant,
  onClick,
  linktype,
  target,
}) => {
  const classes = clsx(variant && styles[`is${variant}`], align && styles[`isAligned${align}`], className);

  return href ? (
    <Link href={href || '#'} className={classes} linktype={linktype} target={target}>
      {children}
    </Link>
  ) : (
    <button
      title={title}
      type={type}
      className={classes}
      onClick={onClick}
      role="button"
      name={typeof children === 'string' ? children : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
