const baseUrl = Cypress.config().baseUrl || 'http://localhost:3000';

describe('Run lighthouse audit on website', () => {
  /**
   * Visits the home page before any test and injects the accessibility logger.
   */
  before(() => {
    cy.visit(baseUrl);
    cy.injectAxe();
  });

  /**
   * Prepare aliases before each test. (they're destroyed at the end of each test)
   */
  beforeEach(() => {
    cy.prepareDOMAliases();
  });

  it('should navigate to home', () => {
    const greenThresholds = {
      performance: 90,
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
      pwa: 90,
    };
    cy.lighthouse(
      { ...greenThresholds, performance: 50, pwa: 30 },
      {},
      {
        output: 'html', //If output is not specified, then the json report will be generated
        /* ... your lighthouse configs */
      }
    );
  });
});

//? Prevent TypeScript from reading file as legacy script
export {};
