import type { MenuComponent } from './types';

import { Link } from '@components/Link';

import styles from './Menu.module.scss';

export const baseSlug = (slug: string) => slug && `/${slug}`;

export const Menu: MenuComponent = ({ nav, media = 'mobile' }) => {
  return (
    <ul className={styles.menu} data-test-id={`header-${media}_menu`}>
      <>
        {nav &&
          nav.map((item) => {
            return (
              <li key={item?.id} className={styles.topMenu} data-test-id={`header-${media}_menu-item`}>
                <Link href={item?.slug} data-test-id={`header-${media}_menu-item_link`}>
                  {item?.name}
                </Link>
              </li>
            );
          })}
      </>
    </ul>
  );
};

export default Menu;
