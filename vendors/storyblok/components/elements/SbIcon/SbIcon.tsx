//? Storyblok component types
import type { SbIconComponent } from './types';

//? UI components
import { Icon } from '@components/Icon';

export const SbIcon: SbIconComponent = ({ blok }) => {
  const label = <div>{blok.label}</div>;
  return <Icon iconName={blok.iconName} width={blok.width} height={blok.height} label={label} />;
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbIcon;
