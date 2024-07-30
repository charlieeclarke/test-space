//? Storyblok component types
import type { SbButtonComponent } from './types';

//? UI components
import { Button } from '@components/Button';

export const SbButton: SbButtonComponent = ({ blok }) => {
  //? Remove storyblok props and pass to UI component
  const { _uid, _editable, component, align, link, label, ...buttonAttrs } = blok;
  return (
    <Button href={blok.link?.cached_url || '#'} align={align ?? 'center'} linktype={link?.linktype} {...buttonAttrs}>
      {label}
    </Button>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbButton;
