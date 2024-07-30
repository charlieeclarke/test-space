//? Storyblok component types
import dynamic from 'next/dynamic';
import type { SbTabsComponent } from './types';

const Tabs = dynamic(() => import('@components/Tabs').then((cmp) => cmp.Tabs));
const RichText = dynamic(() => import('@components/RichText').then((cmp) => cmp.RichText));

export const SbTabs: SbTabsComponent = ({ blok }) => {
  const { title, items, _uid } = blok;

  return (
    <Tabs
      title={title}
      items={items.map((item, i) => {
        return {
          component: <RichText content={item.content} key={`tab-item-${i}`} />,
          title: item.title,
        };
      })}
      componentId={_uid}
    />
  );
};

export default SbTabs;
