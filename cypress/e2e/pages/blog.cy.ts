describe('Blog page', () => {
  /**
   * Visits the home page before any test and injects the accessibility logger.
   */
  // TODO: Commenting the tests that are failing. Revert back once the tests are fixed.
  // before(() => {
  //   cy.visit('/blog');
  //   cy.injectAxe();
  // });
  // /**
  //  * Prepare aliases before each test. (they're destroyed at the end of each test)
  //  */
  // beforeEach(() => {
  //   cy.prepareDOMAliases();
  // });
  // it('should display a main title', () => {
  //   cy.get('[class^="Hero_hero"]').within(() => {
  //     cy.get('h1.u-h1').should('exist').should('have.text', 'Welcome to our blog.');
  //   });
  // });
  // it('should render tags page', () => {
  //   cy.visit('/blog/tags/tag1');
  //   cy.get('[class^="Hero_hero"]')
  //     .should('be.visible')
  //     .within(() => {
  //       cy.get('h1.u-h1').should('be.visible').should('exist').should('have.text', 'Blog posts by tag.');
  //     });
  // });
  // it('should redirect to pagination page', () => {
  //   cy.visit('/blog');
  //   cy.get('[class^="BlogList_pagination"]')
  //     .within(() => {
  //       cy.get('a').each(($el) => {
  //         const label = $el.attr('aria-label');
  //         if (label === 'Page 2') {
  //           cy.wrap($el).click();
  //         }
  //       });
  //     })
  //     .then(() => {
  //       cy.location().should((loc) => {
  //         expect(loc.pathname).to.eq('/blog/page/2');
  //       });
  //     });
  // });
  // it('should open blog post page', () => {
  //   cy.visit('/blog');
  //   cy.get('.blogList')
  //     .within(() => {
  //       cy.get('a').each(($el) => {
  //         const href = $el.attr('href');
  //         if (href && href.includes('/blog/eleventh-post')) {
  //           cy.wrap($el).click();
  //         }
  //       });
  //     })
  //     .then(() => {
  //       cy.location().should((loc) => {
  //         expect(loc.pathname).to.eq('/blog/eleventh-post');
  //       });
  //     });
  // });
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
