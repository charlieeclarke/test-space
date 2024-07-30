import { GraphQLClient } from 'graphql-request';
import { getSdk } from '~storyblok/_generated/storyblokSdk';

const client = new GraphQLClient('https://gapi.storyblok.com/v1/api', {
  headers: {
    token: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    version: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? 'published' : 'draft',
  },
});

export const sdk = getSdk(client);
