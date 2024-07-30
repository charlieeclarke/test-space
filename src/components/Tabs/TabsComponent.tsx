import { Tabs as ReactTabs, TabList, Tab, TabPanel } from 'react-tabs';

import { TabsComponent } from './types';

import styles from './TabsComponent.module.scss';

export const Tabs: TabsComponent = ({ title, items, componentId }) => {
  if (!Array.isArray(items) || items.length < 1) {
    return null;
  }

  const titleId = `tabs-${componentId ? componentId : Math.random().toString(36).substr(2, 16)}-title`;
  const ariaProps = title ? { 'aria-labelledby': titleId } : {};

  return (
    <div className={styles.tabs__container}>
      {title && <h3 id={titleId}>{title}</h3>}
      <ReactTabs {...ariaProps}>
        <TabList className={styles.tabs__list}>
          {items.map((item, i) => (
            <Tab className={styles.tabs__tab} key={`tab-${i}`}>
              {item.title}
            </Tab>
          ))}
        </TabList>
        {items.map((item, i) => (
          <TabPanel key={`tab-content-${i}`} className={styles.tabs__content}>
            {item.component}
          </TabPanel>
        ))}
      </ReactTabs>
    </div>
  );
};

export default Tabs;
