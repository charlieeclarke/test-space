# MegaMenu

The MegaMenu component allows you to add a mega menu and customise its appearance and behavior.

The MegaMenu takes 2 props - `menuData` and `menuConfig`.

`menuData` is an array of top level menu items. These can be of type `megamenu` or `link`.

## Menu Item Types

### Mega Menu

Renders a mega menu and its toggle button. A mega menu is a large drop down menu that can contain links, components, submenus and menus.

#### Properties:

 - type: 'megamenu'
 - title: The text to display for the mega menu toggle button
 - items: An array of menu items

#### Example:

```
{
  type: 'megamenu',
  title: 'Products',
  items: [
    {
      type: 'menu',
      title: 'Laptops',
      items: [
        {
          type: 'link',
          title: 'Apple',
          url: '/apple',
        },
        {
          type: 'link',
          title: 'Dell',
          url: '/dell',
        },
      ]
    }
  ]
}
```

### Link

Renders a Next.js `<Link>`. If the link is external and `externalLinkIndicator` is set in the config, the indicator will be displayed next to the link title.

#### Properties:

 - type: 'link'
 - title: The text to display for the link.
 - url: The URL to navigate to when the link is clicked.

#### Example:

```
{
  type: 'link',
  title: 'About Us',
  url: '/about-us',
}
```

### Component

Renders a React component. Useful for large menus that contain cards and images etc.

#### Properties:

 - type: 'component'
 - title: A title for the component. This gets added to the component's container element as the `data-component-name` attribute.
 - component: A React element to render.

#### Example:

```
{
  type: 'component',
  component: <CustomComponent />,
}
```

### Submenu

Renders a `<button>` element that, when clicked, will toggle the visibility of everything in the items array.

#### Properties:

 - type: 'submenu'
 - title: The text to display for the submenu toggle button.
 - items: An array of nested menu items (MegaMenuLink, MegaMenuComponent, MegaMenuSubmenu, MegaMenuMenu).

#### Example:

```
{
  type: 'submenu',
  title: 'Products',
  items: [
    {
      type: 'link',
      title: 'Laptops',
      url: '/laptops',
    },
    {
      type: 'link',
      title: 'Desktops',
      url: '/desktops',
    }
  ],
}
```

### Group

Renders an array of items under a heading.

#### Properties:

 - type: 'group'
 - title: The text to display for the group title.
 - items: An array of menu items (MegaMenuLink, MegaMenuSubmenu).

#### Example:

```
{
  type: 'group',
  title: 'Products',
  items: [
    {
      type: 'link',
      title: 'Laptops',
      url: '/laptops',
    },
    {
      type: 'link',
      title: 'Desktops',
      url: '/desktops',
    }
  ]
}
```

## Example Usage

```
const menuData = [
  {
    type: 'link',
    title: 'Home',
    url: '/',
  },
  {
    type: 'link',
    title: 'About Us',
    url: '/about-us',
  },
  {
    type: 'megamenu',
    title: 'Products',
    items: [
      {
        type: 'group',
        title: 'Computers',
        items: [
          {
            type: 'link',
            title: 'Laptops',
            url: '/laptops',
          },
          {
            type: 'link',
            title: 'Desktops',
            url: '/desktops',
          },
          {
            type: 'submenu',
            title: 'Parts',
            items: [
              {
                type: 'link',
                title: 'Desktop PC Parts',
                url: '/desktop-parts',
              },
              {
                type: 'link',
                title: 'Laptop Parts',
                url: '/laptop-parts',
              },
            ],
          }
        ],
      },
      {
        type: 'component',
        title: 'Featured Products',
        component: <ProductsCard />,
      }
    ],
  },
  {
    type: 'megamenu',
    title: 'Services',
    items: [
      {
        type: 'group',
        title: 'Web Design',
        items: [
          {
            type: 'link',
            title: 'Design',
            url: '/web-design',
          },
          {
            type: 'link',
            title: 'SEO',
            url: '/seo',
          },
        ]
      },
      {
        type: 'component',
        title: 'Featured Services',
        component: <ServicesCard />,
      }
    ],
  }
];

const App = () => {
  return <MegaMenu menuData={menuData} />;
};
```

## Configuration

The MegaMenu component takes an optional `menuConfig` prop that allows you to customise the behavior of the menu.

Available configuration options:

 - `externalLinkIndicator`: A React element or string that represents an indicator for external links. This indicator will be displayed next to external link titles. Defaults to `null`.

```
const menuConfig = {
  externalLinkIndicator: '↗',
};

<MegaMenu menuData={menuData} menuConfig={menuConfig} />;
```

## CSS

The MegaMenu component comes with default styles to provide a basic appearance. However, you can customize the styles to match your application's design. The following CSS classes are available for styling:

 - `.megaMenu`: Applied to the root ul element of the MegaMenu.
 - `.megaMenu__container`: Applied to the main drop down container of a mega menu
 - `.megaMenu__toggleButton`: Applied to toggle buttons eg. submenus and the main menu
 - `.megaMenu__group`: Applied to groups
 - `.megaMenu__subMenu`: Applied to submenu items
 - `.megaMenu__link`: Applied to link items
 - `.megaMenu__component`: Applied to component items

### CSS Variables

The MegaMenu uses the following CSS variables for styling:

 - `--megamenu-menu-bg-color`: Sets the background colour of the menu (`.megaMenu__container`)
 - `--megamenu-menu-max-height`: Sets the max height of the menu, defaults to 80vh.
 - `--megamenu-offset-top`: Sets the top offset of the menu, defaults to 0.
 - `--megamenu-menu-padding`: Sets the padding of the menu, defaults to the `--spacing-base` variable value.