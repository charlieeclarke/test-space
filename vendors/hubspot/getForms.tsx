import { HUBSPOT_ENDPOINTS, hubspotFetch } from './fetch';

export const getHubspotForms = () => {
  const formData = hubspotFetch(HUBSPOT_ENDPOINTS.getForms, 'GET');
  return formData;
};

export const submitForm = async (
  data: any,
  formId: string,
  consentToProcess?: boolean,
  consentToProcessText?: string
) => {
  const fieldsKeys = Object.keys(data);
  const fieldsArr = fieldsKeys
    .map((key) => {
      return {
        objectTypeId: '0-1',
        name: key,
        value: `${data[key]}`,
      };
    })
    .filter((key) => key.name !== 'consentToProcessText');

  const formDataObj = {
    submittedAt: Date.now(),
    fields: fieldsArr,
    context: {
      pageUri: window.location.href,
      pageName: document.title,
      // eslint-disable-next-line no-useless-escape
      hutk: document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1'),
    },
    ...(consentToProcess && {
      legalConsentOptions: {
        consent: {
          consentToProcess: consentToProcess,
          text: consentToProcessText,
        },
      },
    }),
  };

  const submissionData = JSON.stringify(formDataObj);
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  if (!portalId) return false;

  const response = await hubspotFetch(HUBSPOT_ENDPOINTS.submitForm, 'POST', {
    subPath: `${portalId}/${formId}`,
    data: submissionData,
  });
  return response;
};
