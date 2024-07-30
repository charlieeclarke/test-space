# Tabs Component

This component adds an accessible tabs component to your project. The component is a wrapper for the `react-tabs` library.

## Usage

The component takes three props:

- `title`: The title for the tabs component, displayed as an H3 which is used as an aria-label.
- `items`: An array of objects, each object containing a `title` and `content` property.
- `componentId`: A unique ID for the component. If this isn't supplied then a random ID will be generated although this is not ideal - there's always a chance duplicate IDs could exist.

```jsx
import {Tabs} from '@components/Tabs';

const items = [
  {
    title: 'Tab 1',
    content: <SomeReactComponent />,
  },
  {
    title: 'Tab 2',
    content: <p>Tab 2 content</p>,
  },
];

<Tabs title="Tabs Example" items={items} componentId="some-unique-string" />;
```

The above example will render a tabs component with the title of 'Tabs Example'. The component will have two tabs, one with the title 'Tab 1' and the other with the title 'Tab 2'. The content for the first tab will be the `SomeReactComponent` component, and the content for the second tab will be a `<p>` element containing the string 'Tab 2 content'.

## CSS

The Tabs component uses the following CSS variables:

 - `--tabs-container-spacing`: The spacing between the tabs component and the title
 - `--tabs-tab-spacing`: The spacing between the individual tabs
 - `--tabs-tab-border`: The border property for the individual tabs
 - `--tabs-tab-padding`: The padding inside the individual tabs
 - `--tabs-tab-selected-bg-color`: The background colour of a selected tab
 - `--tabs-tab-selected-text-color`: The text colour of a selected tab
 - `--tabs-content-padding`: The pading inside the tab content
 - `--tabs-content-border`: The border property of the tab content