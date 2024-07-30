/* eslint-disable @typescript-eslint/no-var-requires */
const copyTempFiles = require('./plop/actions/copyTempFiles');
const deleteTempFiles = require('./plop/actions/deleteTempFiles');
const appendWithNewline = require('./plop/actions/appendWithNewline');
const updateAppImports = require('./plop/actions/updateAppImports');
const updateBloks = require('./plop/actions/updateBloks');
const prettier = require('./plop/actions/prettier');
const prompts = require('./plop/prompts');
const actions = require('./plop/actions/actions');

function generateComponent(plop) {
  appendWithNewline(plop);
  updateAppImports(plop);
  copyTempFiles(plop);
  deleteTempFiles(plop);
  updateBloks(plop);
  prettier(plop);

  plop.setGenerator('component', {
    description: 'Generate a component.',
    prompts,
    actions,
  });
}

module.exports = generateComponent;
