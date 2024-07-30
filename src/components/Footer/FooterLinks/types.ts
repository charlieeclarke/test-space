type FooterLink = {
  slug: string;
  name: string;
  linktype: string;
};
export type FooterLinksProps = {
  links: FooterLink[];
  id: string;
};
export type FooterLinksComponent = React.FC<FooterLinksProps>;
