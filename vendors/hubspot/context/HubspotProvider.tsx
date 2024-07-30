import createSafeContext from '@on/useSafeContext';
import { useState } from 'react';

export const [useHubspot, HubspotContextProvider] = createSafeContext<{
  forms: any[];
  setShowHubspot: (showHubspot: boolean) => void;
  getFormById: (formId: string) => any;
  showHubspot: boolean;
}>();

export const HubspotProvider = ({ children, forms = [] }) => {
  const [showHubspot, setShowHubspot] = useState(false);

  const getFormById = (formId) => forms.find((form) => form.id === formId);

  return (
    <HubspotContextProvider value={{ forms, setShowHubspot, showHubspot, getFormById }}>
      {children}
    </HubspotContextProvider>
  );
};
