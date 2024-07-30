/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

const mkdirp = require('mkdirp');
const fs = require('fs-extra');
const path = require('path');

const appendWithNewline = (plop) => {
  plop.setActionType('appendWithNewline', (answers, config) => {
    const filePath = config.path;
    const outputPath = config.outputPath;
    const textToReplace = plop.renderString(config.template, answers);

    try {
      // load the file
      let fileContent = fs.readFileSync(filePath, 'utf8');

      // Remove the last newline character if it exists
      if (fileContent.endsWith('\n')) {
        fileContent = fileContent.slice(0, -1);
      }

      // Add template text at the of the file and add a newline
      fileContent += '\n' + textToReplace + '\n';

      // create the folder
      const pathToTemp = path.dirname(outputPath);
      mkdirp.sync(pathToTemp);

      fs.writeFileSync(outputPath, fileContent, 'utf8');

      return 'File updated successfully.';
    } catch (error) {
      throw new Error(`Error adding content: ${error}`);
    }
  });
};

module.exports = appendWithNewline;
