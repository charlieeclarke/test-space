import type { FC, HTMLAttributes } from 'react';

type CustomHTMLSelectValue = string | number | readonly string[];

type SafeHTMLSelectAttributes = Omit<
  HTMLAttributes<HTMLSelectElement>,
  'defaultValue' | 'defaultChecked' | 'dangerouslySetInnerHTML'
>;

export type FilterDropdownOption = {
  value: CustomHTMLSelectValue;
  label: string;
  selected?: boolean;
};

export type FilterDropdownProps = SafeHTMLSelectAttributes & {
  name?: string;
  id: string;
  options: FilterDropdownOption[];
  defaultOption: FilterDropdownOption;
};

export type FilterDropdownComponent = FC<FilterDropdownProps>;
