# :memo: Components

This section includes all common components used in the project. Always use barrel imports related to tsconfig paths to import them to keep the code readable.

```typescript
// Import anywhere using barrel import, e.g. Accordion and AccordionItem
import { Accordion, AccordionItem } from 'components';

// And if you need to import its type, you can use barrel import like this:
import type { AccordionComponent, AccordionItemComponent } from '@components/types';
```

## Available components

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Documentation</th>
      <th>Types</th>
      <th>a11y</th>
      <th>Tests</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="./Accordion">Accordion</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Accordion/AccordionItem">Accordion Item</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Button">Button</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
    </tr>
    <tr>
      <td><a href="./Card">Card</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Grid/Column">Column</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./DotLottieWrapper">DotLottieWrapper</a></td>
      <td>:x:</td>
      <td>:x:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Faqs">Faqs</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Footer">Footer</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Grid">Grid</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Header">Header</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Heading">Heading</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Hero">Hero</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Icon">Icon</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Icon">IconSprite</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Image">Image</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./ImageWithTextContent">ImageWithTextContent</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./LanguageSelect">LanguageSelect</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Layout">Layout</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Link">Link</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Logo">Logo</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Meta">Meta</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Modal">Modal</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./RichText">RichText</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./Spinner">Spinner</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
    <tr>
      <td><a href="./VideoWrapper">VideoWrapper</a></td>
      <td>:x:</td>
      <td>:white_check_mark:</td>
      <td>:x:</td>
      <td>:x:</td>
    </tr>
  </tbody>
</table>

## :sparkles: Creating a new component

Use the below structure to create a new component.

> We're using camel case[^1] for component names.

[^1]:  See [camel case](https://en.wikipedia.org/wiki/CamelCase) for more information.

```bash
./components/
└── {{ComponentName}}/
    ├── index.ts # Barrel file
    ├── types.ts # All types related to the component
    ├── {{ComponentName}}.module.scss # SCSS module
    ├── {{ComponentName}}.tsx # Component file
    └── {{ComponentName}}.spec.tsx # Component test file
```

And add the component to the barrel import files.

```typescript
// components/index.ts
export * from './{{ComponentName}}';

// components/types.ts
export type * from './{{ComponentName}}/types';
```

<!-- :construction: (Add CLI command to create a new component)

use our organization CLI tool with the following command and replace the `<componentName>` with the name of your component:

```shell
  on-script create-component <componentName>
```

This command will generate a new folder with the component name and with the following structure:

```
.
└── {{ComponentName}}/
    ├── index.ts
    ├── types.ts
    ├── {{ComponentName}}.module.scss
    ├── {{ComponentName}}.tsx
    └── {{ComponentName}}.spec.tsx
```

The script also add the component to the barrel import files.

```typescript
// components/index.ts
export * from './{{ComponentName}}';

// components/types.ts
export type * from './{{ComponentName}}/types';
```

> ⚠️ You can create component manually by replicating the structure above.
 -->

## :test_tube: Testing the component

> :construction: Not all components have a test file yet, but we're working on it.

Available testing libraries:
- [Jest](https://jestjs.io/)
- [jest-axe](https://github.com/nickcolley/jest-axe)
- [jest-runner-groups](https://www.npmjs.com/package/jest-runner-groups)
- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom)
- [@testing-library/react](https://github.com/testing-library/react-testing-library)
- [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library)

> :information_source: Cypress is also available for e2e testing. You can find more information on our documentation on [e2e tests](../cypress/README.md).

All components must have a spec file. This spec file is used by Jest[^jest-docs] to test the component and it must be placed in the same folder as the component.

This tests are used by GitHub Actions to run the tests and to check the coverage. The default behaviour of the tests Actions is to run the tests on every Pull Request to the main branch.

[^jest-docs]: See the [Jest documentation](https://jestjs.io/docs) for more guides.

### Creating a spec file

All components must have at least basic a11y tests to prevent accessibility issues on production builds.

Remember to use the `test/utils` to create functions that can be reused in your tests.

> :exclamation: ***Always keep your tests updated and passing!***

```typescript
/**
 * {{ComponentName}} tests
 *
 * @group unit/a11y
 * @group unit/components
 * @group unit/components/{{componentName}}
 */
import { ComponentName } from '@components/{{ComponentName}}';
import { render, screen } from '@testing-library/react';
import { a11yQuickCheck } from 'tests/utils';

describe('[component] {{ComponentName}}', () => {
  it('should render the component with the default values', () => {
    const { container } = render(<ComponentName />);
    expect(container).toBeDefined();
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<ComponentName />);
    expect(container).toBeDefined();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

For further information on which methods are available, see the [API Reference](https://jestjs.io/docs/api).

### Debugging your tests



### Running your tests

#### Test it all
You can run the whole components test suite with the following command:

```shell
  yarn test:components
```

#### Test a group

You can run a smaller subset of the tests using groups[^jest-groups]. But we have groups of tests that can be run individually. Feel free to create new group just make sure they're following the standard nomenclature.

[^jest-groups]: For more information on groups, see the [documentation for test groups](https://github.com/eugene-manuilov/jest-runner-groups).

```shell
  yarn test --group=<groupName>
```
```shell
  yarn test:<groupName>
```