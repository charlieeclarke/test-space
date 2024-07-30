import type { SpinnerComponent } from './types';

import styles from './Spinner.module.scss';

export const Spinner: SpinnerComponent = ({ showSpinner = true }) => {
  return (
    <>
      {showSpinner && (
        <div className={styles.main}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </>
  );
};

export default Spinner;
