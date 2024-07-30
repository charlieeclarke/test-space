import clsx from 'clsx';
import styles from './FilterDropdown.module.scss';

import type { FilterDropdownComponent } from './types';

export const FilterDropdown: FilterDropdownComponent = ({
  id,
  options,
  defaultOption,
  className,
  ...htmlSelectAttributes
}) => {
  return (
    <select
      {...htmlSelectAttributes}
      id={id}
      className={clsx(styles.select, className)}
      defaultValue={options.find((option) => option.selected)?.value || defaultOption.value}
    >
      <option value={defaultOption.value}>{defaultOption.label}</option>
      {options?.map((option) => (
        <option key={`filter-${id}-${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
