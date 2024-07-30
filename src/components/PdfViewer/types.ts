import type { TypedDictionary } from '@components/utils.types';

export type PdfSrc = string;

type PdfViewerComponentProps = {
  replace?: any;
  src: any | PdfSrc;
  srcSet?: TypedDictionary<string>;
};

export type PdfViewerComponent = React.FC<PdfViewerComponentProps>;
