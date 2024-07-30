import type { ChangeEvent, FC, PropsWithChildren } from 'react';
import { FiltersQueryString } from './FiltersQueryString.enum';

type FiltersState = 'mobile' | 'desktop';

export type FiltersProps = {
  filterTypes?: FiltersQueryString[];
};

export type FiltersComponent = FC<FiltersProps>;

export type FiltersWrapperProps = {
  state?: FiltersState;
};

export type FiltersWrapperComponent = FC<PropsWithChildren<FiltersWrapperProps>>;

export type FiltersOptionsProps = {
  state?: FiltersState;
  filterTypes?: FiltersQueryString[];
};

export type FiltersOptionsComponent = FC<FiltersOptionsProps>;

export type OnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => void;
