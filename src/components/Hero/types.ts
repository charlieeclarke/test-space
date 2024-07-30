import { ReactNode } from 'react';

type BackgroundImage = {
  filename: string;
  alt?: string;
};

export type HeroComponentProps = React.PropsWithChildren<{
  backgroundImage?: BackgroundImage;
  theme?: string;
  titles: ReactNode;
  ctas?: ReactNode;
  sourceSetFunc?: (path, width, height) => string;
}>;

export type HeroComponent = React.FC<HeroComponentProps>;
