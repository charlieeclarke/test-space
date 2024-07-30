import { useMegaMenuContext } from '../MegaMenuContext';
import { renderMenuItem } from './renderMenuItem';

import { MenuItemFC, MegaMenu, MegaMenuMenuToggle, MegaMenuItem } from '../types';

import styles from '../MegaMenu.module.scss';

export const MenuToggle: MenuItemFC<MegaMenuMenuToggle | MegaMenu> = ({ item }) => {
  const { menuRef } = useMegaMenuContext();

  const onMenuTransitionEnd = (evt) => {
    const firstFocusableElement = evt.currentTarget.querySelector(
      ':scope > button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    evt.currentTarget.removeEventListener('transitionend', onMenuTransitionEnd);
  };

  const closeOtherMenus = (currentMenu) => {
    menuRef.current.childNodes.forEach((node) => {
      if (currentMenu !== node) {
        const el = node as HTMLElement;
        const menu = el.querySelector(':scope > ul[aria-hidden="false"]');
        const toggle = el.querySelector(':scope > button[aria-expanded="true"]');
        if (menu && toggle && menu !== el) {
          menu.setAttribute('aria-hidden', 'true');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  };

  const toggleMenu = (evt) => {
    const buttonElement = evt.currentTarget;
    const currentMenuElement = buttonElement.parentNode;
    const menuElement = currentMenuElement.querySelector(':scope > ul');

    const isOpen = buttonElement.getAttribute('aria-expanded') === 'true';

    if (currentMenuElement.getAttribute('data-toggle-type') === 'megamenu') {
      closeOtherMenus(currentMenuElement);
    }

    if (isOpen) {
      buttonElement.setAttribute('aria-expanded', 'false');
      menuElement.setAttribute('aria-hidden', 'true');
    } else {
      buttonElement.setAttribute('aria-expanded', 'true');
      menuElement.setAttribute('aria-hidden', 'false');

      menuElement.addEventListener('transitionend', onMenuTransitionEnd);
    }
  };

  return (
    <li className={item.type === 'submenu' ? styles.megaMenu__subMenu : undefined} data-toggle-type={item.type}>
      <button type="button" onClick={toggleMenu} aria-expanded="false" className={styles.megaMenu__toggleButton}>
        {item.title}
      </button>
      <ul className={item.type === 'megamenu' ? styles.megaMenu__container : undefined} aria-hidden="true">
        {item.items.map((item: MegaMenuItem, j: number) => renderMenuItem(item, j))}
      </ul>
    </li>
  );
};
