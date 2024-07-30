import '../styles/globals.scss';

import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';

import { storyblokInit, apiPlugin } from '@storyblok/react';

import Debug from '@on/Debug';

import {
  SbFAQs as FAQs,
  SbFAQsItem as FAQsItem,
  SbButton as Button,
  SbGlobalComponents as globalcomponents,
  SbHeading as Heading,
  SbHero as Hero,
  SbIcon as Icon,
  SbImage as Image,
  SbImageWithText as ImageWithText,
  SbPage as page,
  SbLegal as Legal,
  SbPdfViewer as PdfViewer,
  SbPost as post,
  SbStory as story,
  SbText as Text,
  SbLatestPosts as LatestPosts,
  SbFeaturedPosts as FeaturedPosts,
  SbTabs as Tabs,
  SbCard as Card,
  SbCardGrid as CardGrid,
  SbCTABanner as CTABanner,
  SbImageGrid as ImageGrid,
  SbLibrary as library,
} from '~storyblok/components';

import { GoogleTagManagerProvider } from '@on/context/GoogleTagManagerProvider';
import { NextPage } from 'next';

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;

storyblokInit({
  accessToken: accessToken || '',
  // bridge: true,
  apiOptions: {
    cache: { type: 'memory' },
  },
  use: [apiPlugin],
  components: {
    FAQs,
    FAQsItem,
    Button,
    globalcomponents,
    Heading,
    Hero,
    Icon,
    Image,
    ImageWithText,
    page,
    PdfViewer,
    post,
    Legal,
    story,
    Text,
    LatestPosts,
    FeaturedPosts,
    Tabs,
    Card,
    CardGrid,
    CTABanner,
    ImageGrid,
    library,
  },
});

// TODO: restore if needed
// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//   // TODO: Insert custom analytics event dispatcher here.
//   const body = JSON.stringify(metric);
//   const url = 'https://examplesite.com/analytics';

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   if (navigator.sendBeacon) {
//     navigator.sendBeacon(url, body);
//   } else {
//     fetch(url, { body, method: 'POST', keepalive: true }).catch((e) => {
//       // eslint-disable-next-line no-console
//       console.error(e);
//     });
//   }
// };

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
  Promise.all([import('react-dom'), import('@axe-core/react')])
    .then(async ([ReactDOM, axe]) => {
      await axe.default(React, ReactDOM, 1000, {});
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e.message || 'Failed to load axe-core');
    });
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const Application = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <GoogleTagManagerProvider>
      {getLayout(<Component {...pageProps} />)}
      <Debug />
    </GoogleTagManagerProvider>
  );
};

export default appWithTranslation(Application);
