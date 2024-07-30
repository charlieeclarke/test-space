type TabsComponentProps = {
  title?: string;
  items?: TabsItem[];
  componentId: string;
};

type TabsItem = {
  title: string;
  component: React.ReactElement;
};

export type TabsComponent = React.FC<TabsComponentProps>;
