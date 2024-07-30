const prompts = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Component name?',
  },
  {
    type: 'confirm',
    name: 'generateStorybookComponent',
    message: 'Do you want to generate a Storyblok component?',
  },
];

module.exports = prompts;
