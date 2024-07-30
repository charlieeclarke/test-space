import { Url } from 'next/dist/shared/lib/router/router';

export type LinkType = 'story' | 'asset' | 'url' | 'email' | string;

export type LinkProps = React.PropsWithChildren<{
  /**
   * Link url
   **/
  href: Url;
  /**
   * Link className
   **/
  className?: string;
  /**
   * Link selected locale
   **/
  locale?: string;
  linktype?: LinkType;
  target?: '_blank' | '_self' | string;
}>;
export type LinkComponent = React.FC<LinkProps>;
