export type AccordionItemProps = React.PropsWithChildren<{
  title?: string;
  _uid: string;
}>;

export type AccordionItemComponent = React.FC<AccordionItemProps>;
