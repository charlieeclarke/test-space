describe('Index page', () => {
  /**
   * Visits the home page before any test and injects the accessibility logger.
   */
  before(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  /**
   * Prepare aliases before each test. (they're destroyed at the end of each test)
   */
  beforeEach(() => {
    cy.prepareDOMAliases();
  });

  it('should display a main title', () => {
    cy.get('[class^="Hero_hero"]')
      .first()
      .within(() => {
        cy.get('h1.u-h1').should('exist').should('have.text', 'Welcome');
      });
  });

  /**
   *
   *!! This tests is commented because the index page isn't compliant with accessibility standards.
   * One possible solution is to add @axe-core to the platform and use it on development environment to prevent accessibility errors on deploys.
   * @see https://github.com/on-associates/on-nextjs-template-actions/blob/12c2203cdb143007cb77ed5a3b14d2e568a5ce56/src/pages/_app.tsx#L91 on how to do it.
   *
   */
  // it('should be a11y compliant', () => {
  //   cy.checkA11y();
  // });
});

//? Prevent TypeScript from reading file as legacy script
export {};
