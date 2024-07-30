import { getWebsiteUrl } from '@on/utils/getWebsiteUrl';
import type { PdfViewerComponent } from './types';

const WEBSITE_URL = getWebsiteUrl();

export const PdfViewer: PdfViewerComponent = (src) => {
  const isDev = process.env.NODE_ENV === 'development';
  const host = `${WEBSITE_URL}/pdf`;

  const rewriteSrc = isDev ? src : src.replace(`https://a.storyblok.com/f/${process.env.STORYBLOK_SPACE_ID}/x/`, host);
  return <embed src={rewriteSrc}></embed>;
};
