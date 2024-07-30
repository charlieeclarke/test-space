import type { Result } from 'axe-core';

export const isMobile = () => {
  return Cypress.config('viewportWidth') < Cypress.env('mobileViewportWidthBreakpoint');
};

/**
 * It takes the results of the axe-core scan, logs the number of violations to the terminal, and then
 * logs a table of the violations to the terminal
 *
 * @example ```
 * import { terminalLog } from './utils';
 *
 * it('Logs violations to the terminal', () => {
 *   cy.checkA11y(null, null, terminalLog)
 * })
 * ```
 *
 */
export const terminalLog = (violations: Result[]) => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
      violations.length === 1 ? 'was' : 'were'
    } detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }));

  cy.task('table', violationData);
};
