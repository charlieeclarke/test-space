import React, { useEffect, useRef } from 'react';

import { renderMenuItem } from './MenuItems/renderMenuItem';
import { MenuToggle } from './MenuItems/MenuToggle';
import { MegaMenuFC, MegaMenuItem, MegaMenuConfig } from './types';

import { MegaMenuContext } from './MegaMenuContext';

import styles from './MegaMenu.module.scss';

export const MegaMenu: MegaMenuFC = ({ menuData, menuConfig = {}, className }) => {
  const menuRef = useRef<HTMLUListElement>();

  const defaultConfig: MegaMenuConfig = {
    externalLinkIndicator: null,
  };

  const config = { ...defaultConfig, ...menuConfig };

  const handleOutsideClick = (evt) => {
    const clickedElement: Node = evt.target;

    if (menuRef.current && !menuRef.current.contains(clickedElement)) {
      menuRef.current.childNodes.forEach((node) => {
        const el = node as HTMLElement;
        const menu = el.querySelector(':scope > ul[aria-hidden="false"]');
        const toggle = el.querySelector(':scope > button[aria-expanded="true"]');

        menu && menu.setAttribute('aria-hidden', 'true');
        toggle && toggle.setAttribute('aria-expanded', 'false');
      });
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <MegaMenuContext.Provider value={{ config, menuRef }}>
      <ul className={`${styles.megaMenu} ${className}`} ref={menuRef}>
        {menuData.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.type === 'link' && renderMenuItem(menu as MegaMenuItem, i)}
            {menu.type === 'megamenu' && <MenuToggle key={`megamenu-${i}`} item={menu} />}
          </React.Fragment>
        ))}
      </ul>
    </MegaMenuContext.Provider>
  );
};

export default MegaMenu;
