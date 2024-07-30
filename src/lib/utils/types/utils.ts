export type ObjectKey = string | number | symbol;

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type AbstractComponent = React.FunctionComponent<any> | React.ComponentProps<any>;
export type PropsOf<T extends AbstractComponent> = T extends React.FunctionComponent<infer R>
  ? R
  : T extends React.ComponentProps<any>
  ? T
  : never;

export type PickProps<PickedProps extends Record<string, unknown>, OriginalProps extends PickedProps> = {
  [K in keyof PickedProps]: OriginalProps[K];
};

export type JoinProps<
  Component extends AbstractComponent,
  ComponentToJoin extends AbstractComponent
> = PropsOf<Component> & PropsOf<ComponentToJoin>;

export type JoinComponentProps<
  Component extends AbstractComponent,
  ComponentToJoin extends AbstractComponent
> = React.FC<JoinProps<Component, ComponentToJoin>>;
