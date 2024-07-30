import React from 'react';

import { MegaMenuContextValue } from './types';

export const MegaMenuContext = React.createContext<MegaMenuContextValue | undefined>(undefined);

export const useMegaMenuContext = () => {
  const context = React.useContext(MegaMenuContext);
  if (!context) {
    throw new Error('useMegaMenuContext must be used within a MegaMenuContextProvider');
  }
  return context;
};
