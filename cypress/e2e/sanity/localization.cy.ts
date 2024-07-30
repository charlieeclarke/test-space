const baseUrl = Cypress.config().baseUrl || 'http://localhost:3000';

describe('Verify Website Localization Headers', () => {
  const expectedUrl = process.env.WEBSITE_URL;
  const secondaryLocale = 'de';
  const subPage = 'kitchen-sink';
  const expectedSecondaryLocaleUrl = `${expectedUrl}/${secondaryLocale}`;
  const expectedSecondaryLocaleSubPageUrl = `${expectedUrl}/${secondaryLocale}/${subPage}`;

  before(() => {
    cy.visit(`/`);
  });

  beforeEach(() => {
    cy.prepareDOMAliases();
  });

  // it(`should render localized metadata on default locale home page`, () => {
  //   cy.url().then((url) => {
  //     cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
  //   });

  //   cy.get('head link[rel="canonical"]').invoke('attr', 'href').should('eq', expectedUrl);
  //   cy.get('head link[hreflang="x-default"]').invoke('attr', 'href').should('eq', expectedUrl);

  //   // Only enable if there is a secondary locale
  //   // cy.get(`head link[hreflang="${secondaryLocale}"]`).invoke('attr', 'href').should('eq', expectedSecondaryLocaleUrl);
  // });

  // it(`should render localization metadata in default locale on a sub page`, () => {
  //   let _expectedUrl = `${expectedUrl}/${subPage}`;

  //   cy.visit(`/${subPage}`);

  //   cy.url().then((url) => {
  //     cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
  //   });

  //   cy.get('head link[rel="canonical"]').invoke('attr', 'href').should('eq', _expectedUrl);
  //   cy.get('head link[hreflang="x-default"]').invoke('attr', 'href').should('eq', _expectedUrl);

  //   // Only enable if there is a secondary locale
  //   // cy.get(`head link[hreflang="${secondaryLocale}"]`)
  //   //   .invoke('attr', 'href')
  //   //   .should('eq', expectedSecondaryLocaleSubPageUrl);
  // });

  // Only enable if there is a secondary locale
  // it(`should render localized metadata on secondary locale home page`, () => {
  //   let _expectedUrl = `${expectedUrl}/${secondaryLocale}`;

  //   cy.visit(`/${secondaryLocale}`);

  //   cy.url().then((url) => {
  //     cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
  //   });

  //   cy.get('head link[rel="canonical"]').invoke('attr', 'href').should('eq', _expectedUrl);
  //   cy.get('head link[hreflang="x-default"]').invoke('attr', 'href').should('eq', expectedUrl);
  //   cy.get('head link[hreflang="en"]').invoke('attr', 'href').should('eq', expectedUrl);
  //   cy.get(`head link[hreflang="${secondaryLocale}"]`).invoke('attr', 'href').should('eq', expectedSecondaryLocaleUrl);
  // });

  // Only enable if there is a secondary locale
  // it(`should render localization metadata in secondary locale sub page`, () => {
  //   let expectedDefaultUrl = `${expectedUrl}/${subPage}`;
  //   let _expectedUrl = `${expectedUrl}/${secondaryLocale}/${subPage}`;

  //   cy.visit(`/${secondaryLocale}/${subPage}`);

  //   cy.url().then((url) => {
  //     cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
  //   });

  //   cy.get('head link[rel="canonical"]').invoke('attr', 'href').should('eq', _expectedUrl);
  //   cy.get('head link[hreflang="x-default"]').invoke('attr', 'href').should('eq', expectedDefaultUrl);
  //   cy.get('head link[hreflang="en"]').invoke('attr', 'href').should('eq', expectedDefaultUrl);
  //   cy.get(`head link[hreflang="${secondaryLocale}"]`)
  //     .invoke('attr', 'href')
  //     .should('eq', expectedSecondaryLocaleSubPageUrl);
  // });
});

//? Prevent TypeScript from reading file as legacy script
export {};

//   locales.map((locale) => {
//     it(`should render localization metadata on ${locale.toUpperCase()} page`, () => {
//       let _expectedUrl = expectedUrl;
//       if (locale !== defaultLocale) {
//         cy.visit(`/${locale}`);
//         _expectedUrl = `${expectedUrl}/${locale}`;
//       }

//       cy.url().then((url) => {
//         cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
//       });

//       console.log(_expectedUrl);

//       // The Index canonical tag should be the default locale
//       cy.get('head link[rel="canonical"]').invoke('attr', 'href').should('eq', _expectedUrl);
//     });
//   });

//   locales.map((locale) => {
//     it(`should render localization metadata on ${locale.toUpperCase()}/${subPage} sub page`, () => {
//       let _expectedUrl = expectedUrl;

//       cy.visit(`/`);
//       if (locale === defaultLocale) {
//         cy.visit(`/${subPage}`);
//         _expectedUrl = `${expectedUrl}/${subPage}`;
//       } else {
//         cy.visit(`/${locale}/${subPage}`);
//         _expectedUrl = `${expectedUrl}/${locale}/${subPage}`;
//       }

//       cy.url().then((url) => {
//         cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
//       });

//       // The Index page should also contain a meta description for SEO
//       cy.get('head link[rel="canonical"]').invoke('attr', 'href').should('eq', _expectedUrl);
//     });
//   });
