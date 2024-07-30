import { MegaMenu as MegaMenuComponent } from '@components/MegaMenu';

import { MegaMenuConfig } from '@components/MegaMenu/types';

const megaMenuConfig: MegaMenuConfig = {
  externalLinkIndicator: '(external)',
};

export const MegaMenu = ({ nav }) => {
  return <MegaMenuComponent menuData={nav} menuConfig={megaMenuConfig} />;
};

export default MegaMenu;
