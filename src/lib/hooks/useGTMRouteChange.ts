import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useGTMRouteChange = (ga4ID: string, gtagLoaded: boolean) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (gtagLoaded) {
        window.gtag('config', ga4ID, {
          page_path: url,
          page_title: document.title,
        });
        window.gtag('event', 'routeChangeComplete', {
          page_path: url,
          page_title: document.title,
        });
      }
    };

    handleRouteChange(router.asPath);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, gtagLoaded]);
};
