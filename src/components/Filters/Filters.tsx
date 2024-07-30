import { useTranslation } from 'next-i18next';

import { Button } from '@components/Button';

import { useFilters } from '@on/context/FiltersProvider';

import { FiltersOptions } from './FiltersOptions';

import styles from './Filters.module.scss';

import type { FiltersComponent } from './types';

export const Filters: FiltersComponent = ({ filterTypes }) => {
  const { setShowFilters, showFilters } = useFilters();
  const { t } = useTranslation();

  if (filterTypes?.length === 0) return null;

  return (
    <>
      <div className={styles.filters}>
        <Button variant="secondary" onClick={() => setShowFilters(!showFilters)}>
          {t('filter_trigger')}
        </Button>

        <FiltersOptions state="desktop" filterTypes={filterTypes} />
      </div>
    </>
  );
};

export default Filters;
