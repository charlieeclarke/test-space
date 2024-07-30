import { Link } from '@components/Link';

import { MenuItemFC, MegaMenuLink } from '../types';

import { useMegaMenuContext } from '../MegaMenuContext';

import styles from '../MegaMenu.module.scss';

export const MenuLink: MenuItemFC<MegaMenuLink> = ({ item }) => {
  const { config } = useMegaMenuContext();

  return (
    <li>
      <Link href={item.url} className={styles.megaMenu__link} linktype={item.linktype}>
        {item.title}
        {config.externalLinkIndicator && /^https?:\/\//.test(item.url) && <span>{config.externalLinkIndicator}</span>}
      </Link>
    </li>
  );
};
