/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

const fs = require('fs');
const mkdirp = require('mkdirp');

const updateAppImports = (plop) => {
  plop.setActionType('updateAppImports', (answers, config) => {
    const { importTemplate, initComponentsTemplate, tempPath } = config;

    const renderedImportTemplate = plop.renderString(importTemplate, answers);
    const renderedInitComponentsTemplate = plop.renderString(initComponentsTemplate, answers);

    const filepath = 'src/pages/';
    const filename = '_app.tsx';

    try {
      // Read the file content
      const fileContent = fs.readFileSync(`${filepath}${filename}`, 'utf8');

      //
      // IMPORT STATEMENT
      //

      // Check if the import already exists
      if (fileContent.includes(renderedImportTemplate)) {
        throw new Error('Import already exists in the file.');
      }

      // Find the position to insert the new import
      const importIndex = fileContent.indexOf(`} from '~storyblok/components';`);

      if (importIndex === -1) {
        throw new Error('Unable to find the import statement in the file.');
      }

      // Insert the new import before the closing curly brace
      const modifiedContent =
        fileContent.slice(0, importIndex) + renderedImportTemplate + '\n' + fileContent.slice(importIndex);

      //
      // STORYBLOKINITCOMPONENTS
      //

      const storyblokInitIndex = modifiedContent.indexOf('storyblokInit(');

      if (storyblokInitIndex === -1) {
        throw new Error('Unable to find the storyblokInit function call in the file.');
      }

      // Find the position of the components object inside storyblokInit
      const componentsIndex = modifiedContent.indexOf('components: {', storyblokInitIndex);

      if (componentsIndex === -1) {
        throw new Error('Unable to find the components object inside storyblokInit.');
      }

      // Extract the components object
      const componentsStart = componentsIndex + 'components: {'.length;
      const componentsEnd = modifiedContent.indexOf('}', componentsStart);
      const componentsObject = modifiedContent.slice(componentsStart, componentsEnd).trim();

      // Append the new component to the components object
      const updatedComponentsObject = `${componentsObject}\n${renderedInitComponentsTemplate}\n`;

      const finalContent =
        modifiedContent.slice(0, componentsStart) + updatedComponentsObject + modifiedContent.slice(componentsEnd);

      // Write the modified content back to the file
      const pathToTemp = `${tempPath}${filepath}`;
      mkdirp.sync(pathToTemp);
      fs.writeFileSync(`${pathToTemp}${filename}`, finalContent, 'utf8');

      return 'Import added successfully!';
    } catch (error) {
      throw new Error(`Error while updating app imports: ${error}`);
    }
  });
};

module.exports = updateAppImports;
