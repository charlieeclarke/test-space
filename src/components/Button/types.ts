import { LinkType } from '@components/Link/types';
import { Url } from 'next/dist/shared/lib/router/router';

export type ButtonPropsVariants = '' | 'primary' | 'secondary' | 'link' | 'blank';
export type ButtonPropsAligns = '' | 'left' | 'right' | 'center';

export type ButtonProps = React.PropsWithChildren<{
  href?: Url;
  /**
   * Content of the button.
   */
  children: any;
  /**
   * Block button.
   */
  align?: ButtonPropsAligns;
  /**
   * Extra className of the button.
   */
  className?: string;
  /**
   * Button type- primary, secondary...
   */
  variant?: ButtonPropsVariants;
  title?: string;
  disabled?: boolean;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Button onClick function
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  linktype?: LinkType;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename' | string;
}>;

export type ButtonComponent = React.FC<ButtonProps>;
