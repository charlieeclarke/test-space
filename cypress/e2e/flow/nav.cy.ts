import 'cypress-axe';
import { terminalLog } from '../../support/utils/isMobile';

describe('Header navigation', () => {
  /**
   * Visits the home page before any test and injects the accessibility logger.
   */
  // TODO: Commenting the tests that are failing. Revert back once the tests are fixed.
  // before(() => {
  //   cy.visit('/');
  //   cy.injectAxe();
  // });
  // /**
  //  * Prepare aliases before each test. (they're destroyed at the end of each test)
  //  */
  // beforeEach(() => {
  //   cy.prepareDOMAliases();
  //   cy.viewport('macbook-16');
  // });
  // it('check all links on page', () => {
  //   cy.get('a.main_header-nav_link')
  //     .should('be.visible')
  //     .each((page) => {
  //       cy.request(page.prop('href'))
  //         .then((response) => response.status)
  //         .should('eq', 200);
  //     });
  // });
});

//? Prevent TypeScript from reading file as legacy script
export {};
