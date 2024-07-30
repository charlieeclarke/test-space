export const HEADING_ELEMENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

export const HEADING_APPEARANCES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

export type HeadingVariant = keyof typeof HEADING_ELEMENTS | '';

export type HeadingProps = React.PropsWithChildren<
  {
    element?: HeadingVariant;
    variant?: HeadingVariant;
  } & React.HTMLAttributes<HTMLHeadingElement>
>;
export type HeadingComponent = React.FC<HeadingProps>;
