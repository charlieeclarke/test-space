import '@testing-library/cypress/add-commands';
import '@cypress-audit/lighthouse/commands';

import { CYPRESS_WINDOW_NS } from './utils/window';
import { checkPageA11yCallback } from './utils/checkPageA11y';

/**
 * Prepare DOM aliases by fetching the customer data from the browser window and aliasing them for later use.
 *
 * @example cy.prepareDOMAliases();
 */
Cypress.Commands.add('prepareDOMAliases', () => {
  return cy.window().then((window) => {
    cy.get('body > #__next').then(() => {
      // Wait for the DOM element to be created by Next.js before trying to read any dynamic data from the "window" object
      cy.log(`window[${CYPRESS_WINDOW_NS}]`, window[CYPRESS_WINDOW_NS]);
    });
  });
});

Cypress.Commands.add('checkPageA11y', (path) => {
  cy.visit(path);
  cy.injectAxe();
  cy.checkA11y(undefined, undefined, checkPageA11yCallback);
});

Cypress.Commands.add('getByDataAttr', (dataAttr, selector, ...args) =>
  cy.get(`[data-${dataAttr}="${selector}"]`, ...args)
);

Cypress.Commands.add('getByDataAttrLike', (dataAttr, selector, ...args) =>
  cy.get(`[data-${dataAttr}*="${selector}"]`, ...args)
);

Cypress.Commands.add('getByTestId', (id, ...args) => cy.get(`[data-test-id="${id}"]`, ...args));

//? Prevent TypeScript from reading file as legacy script
export {};
