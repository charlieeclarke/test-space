import { useTranslation } from 'next-i18next';

import { FilterDropdown } from '@components/Filters/FilterDropdown';

import { useFilters } from '@on/context/FiltersProvider';

import { FiltersQueryString } from './FiltersQueryString.enum';
import { FiltersWrapper } from './FiltersWrapper';

import type { FiltersOptionsComponent } from './types';
import { useQueryString } from '@on/hooks/useQueryString';

export const FiltersOptions: FiltersOptionsComponent = ({ state, filterTypes = [] }) => {
  const { searchParams, updateQueryParams } = useQueryString();

  const activeFilter = (filterType: FiltersQueryString) => searchParams[filterType] || 'default';

  const { t } = useTranslation('common');
  const { filters } = useFilters();

  const SORT_BY_FILTERS = {
    'Name: Asc': 'content.title:asc',
    'Name: Desc': 'content.title:desc',
    'Date: Asc': 'published_at:asc',
    'Date: Desc': 'published_at:desc',
  };

  const sortOptions = Object.keys(SORT_BY_FILTERS).map((sortName) => ({
    value: SORT_BY_FILTERS[sortName],
    label: sortName,
    selected: SORT_BY_FILTERS[sortName] === activeFilter(FiltersQueryString.SORT),
  }));

  const tagFilterOptions =
    filters?.map(({ name }) => ({
      value: name,
      label: name,
      selected: name === activeFilter(FiltersQueryString.TAG),
    })) || [];

  const categoryFilterOptions = filters?.map(({ id, name }) => ({
    value: id,
    label: name,
    selected: id === activeFilter(FiltersQueryString.CATEGORY),
  }));

  const translations = {
    tag: t('filter_by_tag'),
    difficulty: t('filter_by_difficulty'),
    sort: t('filter_by_sort'),
    category: t('filter_by_category'),
  };

  const options = {
    tag: tagFilterOptions,
    sort: sortOptions,
    category: categoryFilterOptions,
  };

  if (filters?.length === 0 || filterTypes?.length === 0) return null;

  return (
    <FiltersWrapper state={state}>
      {filterTypes.map((filter) => (
        <FilterDropdown
          key={filter}
          name={filter}
          id={filter}
          onChange={updateQueryParams(filter)}
          options={options[filter]}
          defaultOption={{
            value: '',
            label: translations[filter],
            selected: activeFilter(filter) === 'default',
          }}
        />
      ))}
    </FiltersWrapper>
  );
};

export default FiltersOptions;
