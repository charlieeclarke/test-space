import type { AbstractComponent, PropsOf } from '@on/utils/types';
import { SbBlokData as AbstractBlok } from '@storyblok/js';

export type AbstractBlokComponent<UIComponent extends AbstractComponent> = any & {
  blok: any & PropsOf<UIComponent>;
};

export type FunctionBlok<UIComponent extends AbstractComponent> = React.FC<AbstractBlokComponent<UIComponent>>;
