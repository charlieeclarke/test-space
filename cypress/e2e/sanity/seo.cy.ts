const baseUrl = Cypress.config().baseUrl || 'http://localhost:3000';

describe('Verify SEO Metadata', () => {
  /*
   * Visits the home page before any test
   */
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.prepareDOMAliases();
  });

  it('should render SEO metadata on Index page', () => {
    cy.url().then((url) => {
      cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
    });

    // The Index page should have a page title
    cy.get('head title').should('not.be.empty');

    // The Index page should also contain a meta description for SEO
    cy.get('head meta[name="description"]').invoke('attr', 'content').should('not.be.empty');
  });
});

//? Prevent TypeScript from reading file as legacy script
export {};
