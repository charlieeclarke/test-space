import clsx from 'clsx';
import styles from './Breakout.module.scss';

import { BreakoutComponent } from './types';

export const Breakout: BreakoutComponent = ({ pinLeft, pinRight, fullWidth, children }) => {
  return (
    <section
      className={clsx(
        styles.breakout,
        pinLeft && styles['breakout--left'],
        pinRight && styles['breakout--right'],
        pinLeft && fullWidth && styles['breakout--fullwidthLeft'],
        pinRight && fullWidth && styles['breakout--fullwidthRight']
      )}
    >
      {!pinLeft && <div />}
      {children}
      {!pinRight && <div />}
    </section>
  );
};

export default Breakout;
