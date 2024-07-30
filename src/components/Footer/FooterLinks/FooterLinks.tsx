import type { FooterLinksComponent } from './types';

import { useTranslation } from 'next-i18next';
import { Link } from '@components/Link';

import styles from './FooterLinks.module.scss';

export const FooterLinks: FooterLinksComponent = ({ links, id }) => {
  const { t } = useTranslation('common');

  const linkArray = links || [
    {
      slug: '/',
      name: t('footer_cookies'),
    },
    {
      slug: '/terms',
      name: t('footer_legal'),
    },
    {
      slug: '/privacy',
      name: t('privacy_policy'),
    },
  ];

  return (
    <nav id={`footer-nav-${id}`} role="navigation" aria-label={`footer-nav-${id}`}>
      <ul className={styles.footerMenu}>
        {linkArray.map(({ slug, name, linktype }) => {
          return (
            <li key={slug}>
              <Link linktype={linktype} href={slug}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterLinks;
