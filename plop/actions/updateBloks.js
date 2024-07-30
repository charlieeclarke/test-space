/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

const fs = require('fs');
const mkdirp = require('mkdirp');
const nextPath = require('path');

const updateBloks = (plop) => {
  plop.setActionType('updateBloks', (answers, config) => {
    const { path, outputPath, template } = config;

    const renderedTemplate = plop.renderString(template, answers);

    try {
      // Read the file content
      const fileContent = fs.readFileSync(path, 'utf8');

      // Find the position of '};'
      const closingBraceIndex = fileContent.indexOf('};');
      if (closingBraceIndex === -1) {
        throw new Error('Unable to find "};".');
      }

      // Insert the template above '};'
      const modifiedContent =
        fileContent.slice(0, closingBraceIndex) + renderedTemplate + fileContent.slice(closingBraceIndex);

      const pathToTemp = nextPath.dirname(outputPath);
      mkdirp.sync(pathToTemp);

      // Write the modified content back to the file
      fs.writeFileSync(outputPath, modifiedContent, 'utf8');

      return 'Import added successfully!';
    } catch (error) {
      throw new Error(`Error while updating app imports: ${error}`);
    }
  });
};

module.exports = updateBloks;
