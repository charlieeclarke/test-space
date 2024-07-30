export type IconProps = {
  iconName?: '' | 'caret' | 'arrow' | 'tick' | 'close' | 'search';
  label?: string | React.ReactNode;
  width?: number;
  height?: number;
  viewBox?: string;
  stroke?: string;
  fill?: string;
};

export type IconComponent = React.FC<IconProps>;
