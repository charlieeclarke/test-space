import { SbNavigationLinkProps } from '../components/types';

function formatSlug(slug: string) {
  const slugList = slug.split('/');

  if (slugList[0] === 'en') slugList.shift();

  return slugList.join('/');
}

const getNavigations = ({ links = [] }: { links: SbNavigationLinkProps[] }) => {
  return links
    .map((link) => {
      const haveData = link.Link?.cached_url && link.LinkName;
      return haveData
        ? {
            slug: formatSlug(link.Link?.cached_url),
            linktype: link.Link?.linktype,
            name: link.LinkName,
            parentId: 0,
            id: link._uid,
            submenu: link?.submenu || null,
          }
        : null;
    })
    .filter((item) => item !== null && item.parentId === 0);
};

const parseMegaMenuData = (a) => {
  switch (a.component) {
    case 'megamenu':
      return {
        title: a.title,
        type: a.component,
        items: a.items.map(parseMegaMenuData),
      };
    case 'group':
      return {
        title: a.title,
        type: a.component,
        items: a.items.map(parseMegaMenuData),
      };
    case 'submenu':
      return {
        title: a.title,
        type: a.component,
        items: a.items.map(parseMegaMenuData),
      };
    case 'link':
      return {
        title: a.title,
        type: a.component,
        url: a.url.cached_url,
        linktype: a.url.linktype,
      };
    case 'component':
      return {
        title: a.title,
        type: a.component,
        component: JSON.stringify(a.item),
      };
  }
};

export const getStoryBlokNavLinks = (story: Record<string, any>) => {
  const { content } = story;

  if (!content) return {};

  const { globalHeader, globalFooter } = content;

  const headerGlobal = globalHeader?.content?.global || [];
  const footerGlobal = globalFooter?.content?.global || [];

  const megaMenuData = headerGlobal.filter((blok: { component: string }) => blok.component === 'MegaMenuWrapper');
  const headerNav = headerGlobal.filter((blok: { component: string }) => blok.component === 'NavigationWrapper');
  const footerNav = footerGlobal.filter((blok: { component: string }) => blok.component === 'NavigationWrapper');

  const headerLinks = headerNav.map((nav: { links: SbNavigationLinkProps[] }) => getNavigations(nav));
  const footerLinks = footerNav.map((nav: { links: SbNavigationLinkProps[] }) => getNavigations(nav));
  const headerMegaMenu = megaMenuData.length ? megaMenuData[0].items.map(parseMegaMenuData) : null;

  return {
    headerMegaMenu,
    headerLinks,
    footerLinks,
  };
};
