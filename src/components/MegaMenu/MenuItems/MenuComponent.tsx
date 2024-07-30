import { Bloks } from '~storyblok/components/_bloks';

import { MenuItemFC, MegaMenuComponent } from '../types';

import styles from '../MegaMenu.module.scss';

export const MenuComponent: MenuItemFC<MegaMenuComponent> = ({ item }) => {
  if (typeof item.component === 'string') {
    const parsedComponent = JSON.parse(item.component)[0];
    const BlokType = Bloks[parsedComponent.component];

    if (!BlokType) return null;

    return (
      <li className={styles.megaMenu__component} data-component-name={item.title}>
        <BlokType blok={parsedComponent} />
      </li>
    );
  } else {
    return (
      <li className={styles.megaMenu__component} data-component-name={item.title}>
        {item.component}
      </li>
    );
  }
};
