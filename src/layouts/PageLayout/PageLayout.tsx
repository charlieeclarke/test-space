import type { PageLayoutType } from './types';

import { Meta } from '@components/Meta';
import { ISbStoryData } from '@storyblok/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { getSEOMetadata } from '~storyblok/helpers';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export const PageLayout: PageLayoutType = ({ children, story, navigation, library }) => {
  const { locale, defaultLocale } = useRouter();
  const pageMeta = useCallback(
    () => (story && getSEOMetadata(story as ISbStoryData, locale, defaultLocale)) || undefined,
    [story, locale, defaultLocale]
  );

  if (library) return <main>{children}</main>;

  return (
    <>
      <Header navigation={navigation} />
      <Meta {...pageMeta()} />
      <main>{children}</main>
      {navigation && <Footer navigation={navigation.footerLinks} />}
    </>
  );
};
export default PageLayout;
