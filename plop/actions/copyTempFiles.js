/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

const fs = require('fs-extra');
const path = require('path');

const copyTempFiles = (plop) => {
  plop.setActionType('copyTempFiles', (answers, config) => {
    const { tempPath } = config;

    if (!fs.existsSync(tempPath)) {
      return 'Temporary folder does not exist.';
    }

    try {
      // Copy the contents of the temporary folder to the src folder
      fs.copySync(tempPath, path.join(__dirname, '../../'));

      return 'Files copied successfully!';
    } catch (error) {
      throw new Error(`Error copying files: ${error}`);
    }
  });
};

module.exports = copyTempFiles;
