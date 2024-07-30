/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

const { rimraf } = require('rimraf');

const deleteTempFiles = (plop) => {
  plop.setActionType('deleteTempFiles', async (answers, config) => {
    const { tempPath } = config;

    const deleted = await rimraf(tempPath);

    if (deleted) {
      return 'Files deleted successfully!';
    } else {
      throw new Error('Error deleting files.');
    }
  });
};

module.exports = deleteTempFiles;
