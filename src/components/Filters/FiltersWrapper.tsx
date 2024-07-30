import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import { Button } from '@components/Button';
import { Icon } from '@components/Icon';

import { useFilters } from '@on/context/FiltersProvider';

import styles from './Filters.module.scss';

import type { FiltersWrapperComponent } from './types';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export const FiltersWrapper: FiltersWrapperComponent = ({ state, children }) => {
  const { t } = useTranslation();

  const router = useRouter();
  const pathname = usePathname();

  const { setShowFilters, showFilters } = useFilters();

  const handleFiltersReset = () => {
    setShowFilters(false);
    void router.push(pathname, undefined);
  };

  return (
    <>
      <section
        className={clsx(
          styles.filtersGroup,
          showFilters && styles.filtersGroupExpanded,
          styles[`filtersGroup--${state}`]
        )}
      >
        <header className={styles.filtersGroup__header}>
          <Button variant="primary" className={styles.filtersGroup__close} onClick={() => setShowFilters(false)}>
            <h4 className="u-body-xl">{t('filter_title')}</h4>
            <Icon iconName="close" />
          </Button>
        </header>
        <div className={styles.filters}>{children}</div>
        <footer className={styles.filtersGroup__footer}>
          <Button variant="secondary" onClick={() => handleFiltersReset()}>
            {t('filter_reset')}
          </Button>
          <Button variant="primary" onClick={() => setShowFilters(false)}>
            {t('filter_apply')}
          </Button>
        </footer>
      </section>
      <div className={clsx(styles.filtersScreen, showFilters && styles.filtersScreenVisible)} />
    </>
  );
};

export default FiltersWrapper;
