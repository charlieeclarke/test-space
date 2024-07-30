import createSafeContext from '@on/useSafeContext';
import { useState } from 'react';

export const [useFilters, FiltersContextProvider] = createSafeContext<{
  filters: any[];
  setShowFilters: (showFilters: boolean) => void;
  showFilters: boolean;
}>();

export const FiltersProvider = ({ children, filters }) => {
  const [showFilters, setShowFilters] = useState(false);

  return <FiltersContextProvider value={{ filters, setShowFilters, showFilters }}>{children}</FiltersContextProvider>;
};
