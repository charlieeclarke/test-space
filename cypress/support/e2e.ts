import 'cypress-axe'; // docs: https://github.com/component-driven/cypress-axe
import './commands';

import { isMobile } from './utils/isMobile';

beforeEach(() => {
  cy.prepareDOMAliases();

  // cy.intercept middleware to remove 'if-none-match' headers from all requests
  // to prevent the server from returning cached responses of API requests
  cy.intercept({ url: 'http://localhost:3000/**', middleware: true }, (req) => delete req.headers['if-none-match']);

  // Throttle API responses for mobile testing to simulate real world condition
  if (isMobile()) {
    cy.intercept({ url: 'http://localhost:3000/**', middleware: true }, (req) => {
      req.on('response', (res) => {
        // Throttle the response to 1 Mbps to simulate a mobile 3G connection
        res.setThrottle(1000);
      });
    });
  }
});
