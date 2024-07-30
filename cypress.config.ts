import { lighthouse, prepareAudit } from '@cypress-audit/lighthouse';
import { defineConfig } from 'cypress';
import { resolve } from 'path';
import * as fs from 'fs';

const headers = {
  mime: 'text/html; charset=utf-8',
  permissionsPolicy: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  strictTransportSecurity: 'max-age=63072000; preload',
  dnsPrefetchControl: 'on',
  contentTypeOptions: 'nosniff',
  frameOptions: 'SAMEORIGIN',
  xssProtection: '1; mode=block',
};

const baseUrl = 'http://localhost:3000';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  env: {
    headers,
  },
  projectId: 'on-nextjs-template',
  e2e: {
    baseUrl,
    setupNodeEvents(on) {
      on('before:browser:launch', (_browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse((lighthouseReport) => {
          const reportDir = resolve(__dirname, 'cypress', 'reports');
          fs.mkdirSync(reportDir, { recursive: true });
          fs.writeFile(resolve(reportDir, 'lighthouse.html'), lighthouseReport.report, (error: any) => {
            error
              ? console.error('Failed to generate Lighthouse report', error)
              : console.log('Lighthouse report created successfully. File: %d', resolve(reportDir, 'lighthouse.json'));
          });
        }),
        log(message) {
          // eslint-disable-next-line no-console
          console.log(message);

          return null;
        },
        table(message) {
          // eslint-disable-next-line no-console
          console.table(message);

          return null;
        },
      });
    },
  },
});
