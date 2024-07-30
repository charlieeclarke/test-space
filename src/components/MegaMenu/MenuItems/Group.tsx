import { MenuItemFC, MegaMenuGroup, MegaMenuItem } from '../types';

import { renderMenuItem } from './renderMenuItem';

import styles from '../MegaMenu.module.scss';

export const Group: MenuItemFC<MegaMenuGroup> = ({ item }) => {
  return (
    <li className={styles.megaMenu__group}>
      <h3>{item.title}</h3>
      <ul>{item.items.map((subItem: MegaMenuItem, i: number) => renderMenuItem(subItem, i))}</ul>
    </li>
  );
};
