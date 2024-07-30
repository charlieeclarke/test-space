/// <reference types="cypress" />

type CyGetArgs = Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>;

declare global {
  namespace Cypress {
    interface Chainable {
      prepareDOMAliases: () => Chainable<AUTWindow>;
      getByDataAttr(dataAttr: string, selector: string, args?: CyGetArgs): Chainable<JQuery<HTMLElement>>;
      getByDataAttrLike(dataAttr: string, selector: string, args?: CyGetArgs): Chainable<JQuery<HTMLElement>>;
      getByTestId(id: string, args?: CyGetArgs): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to check a11y standards.
       * @example cy.checkPageA11y('/')
       */
      checkPageA11y(path: string): Chainable<Element>;
    }
  }
}

//? Prevent TypeScript from reading file as legacy script
export {};
