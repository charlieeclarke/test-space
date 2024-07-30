import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'vendors/storyblok/_generated/storyblok.graphql': {
      schema: [
        {
          'https://gapi.storyblok.com/v1/api': {
            headers: {
              token: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN!,
              version: 'draft',
            },
          },
        },
      ],
      plugins: ['schema-ast'],
    },
    'vendors/storyblok/_generated/storyblokSdk.ts': {
      documents: ['vendors/storyblok/**/*.graphql'],
      schema: {
        'https://gapi.storyblok.com/v1/api': {
          headers: {
            token: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN!,
            version: 'draft',
          },
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
};

export default config;
