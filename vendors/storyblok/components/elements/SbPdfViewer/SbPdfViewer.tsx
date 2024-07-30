import type { SbPdfViewerComponent } from './types';

import { PdfViewer } from '@components/PdfViewer';

export const SbPdfViewer: SbPdfViewerComponent = (blok) => {
  const { src } = blok;
  return <PdfViewer src={src}></PdfViewer>;
};

export default SbPdfViewer;
