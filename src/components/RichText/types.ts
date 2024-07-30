export type RichTextProps = React.PropsWithChildren<{
  content?: any;
  align?: string;
  maxWidth?: number;
  isSectionCentered?: boolean;
  largeParagraphText?: boolean;
}>;
export type RichTextComponent = React.FC<RichTextProps>;
