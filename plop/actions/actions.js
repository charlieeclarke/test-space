const actions = (data) => {
  const temporaryFilesPath = 'plop/__temp/';
  const actions = [];

  // Delete temporary files in case they exist for some reason
  actions.push({
    type: 'deleteTempFiles',
    tempPath: temporaryFilesPath,
  });

  // Generate React component files
  actions.push(
    {
      type: 'add',
      path: `${temporaryFilesPath}src/components/{{componentName}}/{{componentName}}.tsx`,
      templateFile: 'plop/templates/component/component.tsx.hbs',
    },
    {
      type: 'add',
      path: `${temporaryFilesPath}src/components/{{componentName}}/index.ts`,
      templateFile: 'plop/templates/component/index.ts.hbs',
    },
    {
      type: 'add',
      path: `${temporaryFilesPath}src/components/{{componentName}}/{{componentName}}.module.scss`,
      templateFile: 'plop/templates/component/component.module.scss.hbs',
    },
    {
      type: 'add',
      path: `${temporaryFilesPath}src/components/{{componentName}}/types.ts`,
      templateFile: 'plop/templates/component/types.ts.hbs',
    }
  );

  if (data.generateStorybookComponent) {
    // Generate Storyblok component files
    actions.push(
      {
        type: 'add',
        path: `${temporaryFilesPath}vendors/storyblok/components/bloks/Sb{{componentName}}/Sb{{componentName}}.tsx`,
        templateFile: 'plop/templates/sbcomponent/sbcomponent.tsx.hbs',
      },
      {
        type: 'add',
        path: `${temporaryFilesPath}vendors/storyblok/components/bloks/Sb{{componentName}}/index.ts`,
        templateFile: 'plop/templates/sbcomponent/sbindex.ts.hbs',
      },
      {
        type: 'add',
        path: `${temporaryFilesPath}vendors/storyblok/components/bloks/Sb{{componentName}}/types.ts`,
        templateFile: 'plop/templates/sbcomponent/sbtypes.ts.hbs',
      }
    );

    // Add _app.tsx imports
    actions.push({
      type: 'updateAppImports',
      importTemplate: 'Sb{{componentName}} as {{componentName}},',
      initComponentsTemplate: '{{componentName}},',
      tempPath: temporaryFilesPath,
    });

    // Other File modifications (imports etc.)
    actions.push(
      {
        type: 'appendWithNewline',
        path: `vendors/storyblok/components/types/sbProps.ts`,
        outputPath: `${temporaryFilesPath}vendors/storyblok/components/types/sbProps.ts`,
        template: `export type Sb{{componentName}}Props = {
    component: '{{componentName}}';
    _uid: string;
    };\n`,
      },
      {
        type: 'appendWithNewline',
        path: `vendors/storyblok/components/bloks/types.ts`,
        outputPath: `${temporaryFilesPath}vendors/storyblok/components/bloks/types.ts`,
        template: `export * from './Sb{{componentName}}/types';`,
      },
      {
        type: 'appendWithNewline',
        path: `vendors/storyblok/components/bloks/index.ts`,
        outputPath: `${temporaryFilesPath}vendors/storyblok/components/bloks/index.ts`,
        template: `export * from './Sb{{componentName}}';`,
      },
      {
        type: 'updateBloks',
        path: `vendors/storyblok/components/_bloks.ts`,
        outputPath: `${temporaryFilesPath}vendors/storyblok/components/_bloks.ts`,
        template: `{{componentName}}: dynamic(() => import('./bloks/Sb{{componentName}}/Sb{{componentName}}')),`,
      }
    );
  }

  // PRETTIER
  actions.push({
    type: 'prettier',
    tempPath: temporaryFilesPath,
  });

  // COPY TEMP FILES
  actions.push({
    type: 'copyTempFiles',
    tempPath: temporaryFilesPath,
  });

  // DELETE TEMP FILES
  actions.push({
    type: 'deleteTempFiles',
    tempPath: temporaryFilesPath,
  });

  return actions;
};

module.exports = actions;
