import { DataLayerObject } from '@on/types';
import createSafeContext from '@on/useSafeContext';
import Script from 'next/script';
import { useState } from 'react';
import { useGTMRouteChange } from '@on/hooks/useGTMRouteChange';

const GA4_ID = process.env.NEXT_PUBLIC_GA_4_TRACKING_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_TRACKING_ID;

export const [useGtm, GoogleTagManagerContextProvider] = createSafeContext<{
  pushToDataLayer: (obj: DataLayerObject) => void;
}>();

export type GTMModes = 'ga4' | 'gtm';

export const GoogleTagManagerProvider = ({ children }) => {
  const trackingEnabled = GA4_ID || GTM_ID;
  const [gtagLoaded, setGtagLoaded] = useState(false);

  const initGtag = () => {
    if (!GA4_ID) {
      throw new Error('Require GA_MEASUREMENT_ID');
    }

    if (typeof window === 'undefined' || typeof document === 'undefined' || gtagLoaded) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);

    setGtagLoaded(true);
  };

  useGTMRouteChange(GA4_ID, gtagLoaded);

  const pushToDataLayer = (obj: DataLayerObject) => {
    if (!trackingEnabled) return false;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);
  };

  return (
    <GoogleTagManagerContextProvider value={{ pushToDataLayer }}>
      {GA4_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          onReady={() => initGtag()}
          strategy="afterInteractive"
        />
      )}

      {GTM_ID && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
              (function(w,d,s,l,i){w[l]=w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', "${GTM_ID}");
            `}
        </Script>
      )}
      {children}
    </GoogleTagManagerContextProvider>
  );
};
