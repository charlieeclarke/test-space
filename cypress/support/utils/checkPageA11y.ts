import type { Result } from 'axe-core';

const severityIndicators = {
  minor: '⚪️',
  moderate: '🟡',
  serious: '🟠',
  critical: '🔴',
  untracked: '⚫️',
};

export const checkPageA11yCallback = (violations: Result[]) => {
  violations.forEach((violation) => {
    const nodes = Cypress.$(violation.nodes.map((node) => node.target).join(','));

    Cypress.log({
      name: `${severityIndicators[violation.impact || 'untracked']} A11Y`,
      consoleProps: () => violation,
      $el: nodes,
      message: `[${violation.help}](${violation.helpUrl})`,
    });

    violation.nodes.forEach(({ target }) => {
      Cypress.log({
        name: '🔧',
        consoleProps: () => violation,
        $el: Cypress.$(target.join(',')),
        message: target,
      });
    });
  });
};

export default checkPageA11yCallback;
