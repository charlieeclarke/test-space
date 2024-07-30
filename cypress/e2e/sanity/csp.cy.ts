// const baseUrl = Cypress.config().baseUrl || 'http://localhost:3000';
// const headers = Cypress.env('headers');

// describe('Validate CSP', () => {
//   /*
//    * Visits the home page before any test
//    */
//   before(() => {
//     cy.visit('/');
//   });

//   it('should navigate to homepage', () => {
//     cy.url().then((url) => {
//       cy.url({ timeout: 300000 }).should('contains', baseUrl); // Wait at least 5 minute before timing out
//     });
//   });

//   it('should have a valid mime type', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a content-type of text/html
//       const mime = response.headers['content-type'];
//       expect(mime).to.eq(headers.mime);
//     });
//   });

//   it('should have a valid CSP', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct Content-Security-Policy
//       const csp = response.headers['content-security-policy'];
//       expect(csp).to.eq(headers.csp);
//     });
//   });

//   it('should have a valid Permissions-Policy', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct Permissions-Policy
//       const permissionsPolicy = response.headers['permissions-policy'];
//       expect(permissionsPolicy).to.eq(headers.permissionsPolicy);
//     });
//   });

//   it('should have a valid Strict-Transport-Security', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct Strict-Transport-Security
//       const strictTransportSecurity = response.headers['strict-transport-security'];
//       expect(strictTransportSecurity).to.eq(headers.strictTransportSecurity);
//     });
//   });

//   it('should have a valid DNS-Prefetch-Control', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct X-DNS-Prefetch-Control
//       const dnsPrefetchControl = response.headers['x-dns-prefetch-control'];
//       expect(dnsPrefetchControl).to.eq(headers.dnsPrefetchControl);
//     });
//   });

//   it('should have a valid X-Content-Type-Options', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct X-Content-Type-Options
//       const contentTypeOptions = response.headers['x-content-type-options'];
//       expect(contentTypeOptions).to.eq(headers.contentTypeOptions);
//     });
//   });

//   it('should have a valid X-Frame-Options', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct X-Frame-Options
//       const frameOptions = response.headers['x-frame-options'];
//       expect(frameOptions).to.eq(headers.frameOptions);
//     });
//   });

//   it('should have a valid X-XSS-Protection', () => {
//     cy.request({
//       url: '/',
//     }).then((response) => {
//       // The Index page should have a correct X-XSS-Protection
//       const xssProtection = response.headers['x-xss-protection'];
//       expect(xssProtection).to.eq(headers.xssProtection);
//     });
//   });
// });

// //? Prevent TypeScript from reading file as legacy script
// export {};
