import { useTranslation } from 'next-i18next';

import { Button } from '@components/Button';

import styles from './Search.module.scss';

import type { SearchComponent } from './types';
import clsx from 'clsx';
import { Icon } from '@components/Icon';
import { KeyboardEvent, useState } from 'react';
import { useQueryString } from '@on/hooks/useQueryString';

export const Search: SearchComponent = ({ state = 'mobile', className, ...divAttributes }) => {
  const { updateSearchQuery, clearSearchQuery, searchTerm } = useQueryString();
  const [searchOpen, setSearchOpen] = useState(false);
  const { t } = useTranslation('common');

  const searchVisible = searchTerm !== undefined || searchOpen;
  const setSearchVisible = () => {
    if (searchVisible) {
      setSearchOpen(false);
      clearSearchQuery();
    } else {
      setSearchOpen(true);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateSearchQuery(e);
    }
  };

  return (
    <div className={clsx(styles.search, styles[`search--${state}`], className)} {...divAttributes}>
      <form>
        <label className={clsx(styles.search__InputContainer, searchVisible && styles.search__InputContainerOpen)}>
          <span> {t('search')}</span>
          <input
            type="search"
            autoFocus={searchTerm !== null}
            onChange={updateSearchQuery}
            onKeyDown={onKeyDown}
            name="search"
            defaultValue={searchTerm}
            className={clsx(styles.search__Input, searchVisible && styles.search__InputOpen)}
            placeholder={t('search')}
          />
        </label>
        <div className={styles.search__Action}>
          <Button type="button" variant="blank" onClick={() => setSearchVisible()} title={t('toggle_search')}>
            <Icon iconName={searchVisible ? 'close' : 'search'} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
