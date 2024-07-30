/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

const { execSync } = require('child_process');

const prettier = (plop) => {
  plop.setActionType('prettier', (answers, config) => {
    const { tempPath } = config;

    try {
      execSync(`prettier --write ${tempPath}`, { stdio: 'inherit' });
      return 'Files formatted successfully!';
    } catch (error) {
      return `Error formatting files:${error}`;
    }
  });
};

module.exports = prettier;
