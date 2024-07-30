import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.scss';
import { useTranslation } from 'next-i18next';

import { LanguageSwitcherComponent } from './types';

export const LanguageSwitcher: LanguageSwitcherComponent = (props) => {
  const router = useRouter();
  const { pathname, asPath, query, locales, locale: currentLocale } = router;
  const { t } = useTranslation('common');

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  const onChange = (e) => {
    const lang = e.target.value;
    setCookie(lang);
    void router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div className={styles.languageSwitcher}>
      <select className={styles.languageSwitcher__dropdown} onChange={onChange} defaultValue={currentLocale}>
        {locales.map((locale) => (
          <option value={locale} key={locale}>
            {t(locale.toLowerCase())}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
