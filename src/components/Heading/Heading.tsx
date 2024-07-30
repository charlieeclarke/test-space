import type { HeadingVariant, HeadingComponent } from './types';

import { HEADING_APPEARANCES, HEADING_ELEMENTS } from './types';

export const Heading: HeadingComponent = ({ children, element = 'h2', variant = 'h2', ...rest }) => {
  const Component: HeadingVariant = HEADING_ELEMENTS[(element in HEADING_ELEMENTS && element) || 'h2'];
  const asVariant = HEADING_APPEARANCES[(variant in HEADING_ELEMENTS && variant) || 'h3'] || 'h3';

  return (
    <Component className={`u-${asVariant}`} {...rest}>
      <>{children}</>
    </Component>
  );
};

export default Heading;
