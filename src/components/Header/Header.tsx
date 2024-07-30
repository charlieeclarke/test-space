import type { HeaderComponent } from './types';

import { useReducer, useState } from 'react';

import { Button } from '@components/Button';
import { GridColumn, Grid } from '@components/Grid';
import { Logo } from '@components/Logo';
import { LanguageSwitcher } from '@components/LanguageSwitcher';
import { Menu } from './Menu';
import { MegaMenu } from './MegaMenu';

import styles from './Header.module.scss';

export const Header: HeaderComponent = ({ navigation }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [menuNav] = useReducer(
    (state) => state,
    navigation?.headerLinks && navigation?.headerLinks?.[0]?.filter((navItem) => navItem.parentId === 0)
  );
  const megaMenuNav = navigation?.headerMegaMenu;
  const openMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <header data-test-id="main_header" className={styles.main}>
      <Grid alignItems="center">
        <GridColumn xs={8} md={2}>
          <Logo />
        </GridColumn>
        <GridColumn xs={0} md={5}>
          {menuNav && <Menu nav={menuNav} media="desktop" />}
          {megaMenuNav && <MegaMenu nav={megaMenuNav} />}
        </GridColumn>
        <GridColumn xs={2} offsetMd={2} md={3}>
          <LanguageSwitcher />
        </GridColumn>
        <GridColumn xs={2} md={0}>
          <div className={styles.mobileMenuTrigger}>
            <Button
              key="main_header-mobile_menu_trigger"
              onClick={openMenu}
              variant="primary"
              title={'Open Menu'}
              data-test-id="main_header-mobile_menu_trigger"
            >
              Menu
            </Button>
          </div>
        </GridColumn>
      </Grid>
      {menuIsOpen && (
        <div className={`${styles.mobileMenu} u-desktop-hidden`} data-test-id="main_header-mobile_menu">
          {menuNav && <Menu nav={menuNav} media="mobile" />}
          {megaMenuNav && <MegaMenu nav={megaMenuNav} />}
        </div>
      )}
    </header>
  );
};

export default Header;
