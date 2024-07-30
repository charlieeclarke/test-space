import { LinkType } from '@components/Link/types';

export type MegaMenuProps = {
  menuData: MegaMenu[];
  menuConfig?: MegaMenuConfig;
  className?: string;
};

export type MegaMenuFC = React.FC<MegaMenuProps>;

export type MenuItemProps<T> = {
  item: T;
};

export type MenuItemFC<T> = React.FC<MenuItemProps<T>>;

export type MegaMenuContextValue = {
  config: MegaMenuConfig;
  menuRef: React.MutableRefObject<HTMLUListElement>;
};

export type MegaMenuConfig = {
  externalLinkIndicator: React.ReactElement | string | null;
};

export type MegaMenuLink = {
  type: 'link';
  title: string;
  linktype?: LinkType;
  url: string;
};

export type MegaMenuComponent = {
  type: 'component';
  title: string;
  component: React.ReactElement | string;
};

export type MegaMenuMenuToggle = {
  type: 'submenu' | 'megamenu';
  title: string;
  items: MegaMenuItem[];
};

export type MegaMenuGroup = {
  type: 'group';
  title: string;
  items: (MegaMenuLink | MegaMenuMenuToggle)[];
};

export type MegaMenu = {
  type: 'megamenu' | 'link';
  title: string;
  url?: string;
  items?: (MegaMenuLink | MegaMenuComponent | MegaMenuGroup)[];
};

export type MegaMenuItem = MegaMenuLink | MegaMenuComponent | MegaMenuMenuToggle | MegaMenuGroup;
