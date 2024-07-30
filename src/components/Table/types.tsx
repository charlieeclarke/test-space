export type TableCell = {
  component: string;
  value: string;
  _uid: string;
};

export type TableRow = {
  body: Array<TableCell>;
  _uid: string;
};

export type TableProps = {
  thead: Array<TableCell>;
  tbody: Array<TableRow>;
};

export type TableComponent = React.FC<TableProps>;
