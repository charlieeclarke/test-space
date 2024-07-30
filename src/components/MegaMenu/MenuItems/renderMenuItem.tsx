import { Group } from './Group';
import { MenuToggle } from './MenuToggle';
import { MenuLink } from './MenuLink';
import { MenuComponent } from './MenuComponent';

import { MegaMenuItem } from '../types';

export const renderMenuItem = (item: MegaMenuItem, index: number) => {
  switch (item.type) {
    case 'group':
      return <Group item={item} key={`megamenu-menu-item-${index}`} />;
    case 'submenu':
      return <MenuToggle item={item} key={`megamenu-submenu-item-${index}`} />;
    case 'link':
      return <MenuLink item={item} key={`megamenu-link-item-${index}`} />;
    case 'component':
      return <MenuComponent item={item} key={`megamenu-component-item-${index}`} />;
    default:
      return null;
  }
};
