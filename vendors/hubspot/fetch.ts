import { HTTP_METHOD } from 'next/dist/server/web/http';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN;

export const HUBSPOT_ENDPOINTS = {
  getForms: '/marketing/v3/forms/',
  getForm: '/marketing/v3/forms/',
  submitForm: '/submissions/v3/integration/submit/',
} as const;

type HubspotEndPointKeys = keyof typeof HUBSPOT_ENDPOINTS;
type HubspotEndPointPaths = (typeof HUBSPOT_ENDPOINTS)[HubspotEndPointKeys];

export async function hubspotFetch(endpoint: HubspotEndPointPaths, method: HTTP_METHOD, { subPath, data }: any = {}) {
  if (!endpoint || !ACCESS_TOKEN) return false;

  const HOST = method === 'POST' ? 'api.hsforms.com' : 'api.hubapi.com';

  const res = await fetch(`https://${HOST}${endpoint}${subPath ? subPath : ''}`, {
    method: method,
    headers: {
      ...(method !== 'POST' && { Authorization: `Bearer ${ACCESS_TOKEN}` }),
      'Content-Type': 'application/json',
    } as any,
    ...(method === 'POST' && {
      body: data,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
}
