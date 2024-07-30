// Resolved Storyblok Component to local Components
import dynamic from 'next/dynamic';

export const Bloks = {
  Accordion: dynamic(() => import('./bloks/SbFAQs/SbFAQs')),
  AccordionItem: dynamic(() => import('./bloks/SbFAQsItem/SbFAQsItem')),
  Button: dynamic(() => import('./elements/SbButton/SbButton')),
  Heading: dynamic(() => import('./elements/SbHeading/SbHeading')),
  Hero: dynamic(() => import('./bloks/SbHero/SbHero')),
  Icon: dynamic(() => import('./elements/SbIcon/SbIcon')),
  Image: dynamic(() => import('./elements/SbImage/SbImage')),
  ImageWithText: dynamic(() => import('./bloks/SbImageWithText/SbImageWithText')),
  Page: dynamic(() => import('./content/SbPage/SbPage')),
  Text: dynamic(() => import('./elements/SbText/SbText')),
  LatestPosts: dynamic(() => import('./bloks/SbLatestPosts/SbLatestPosts')),
  BlogContent: dynamic(() => import('./bloks/SbBlogContent/SbBlogContent')),
  Tabs: dynamic(() => import('./bloks/SbTabs/SbTabs')),
  CardGrid: dynamic(() => import('./bloks/SbCardGrid/SbCardGrid')),
  CTABanner: dynamic(() => import('./bloks/SbCTABanner/SbCTABanner')),
  ImageGrid: dynamic(() => import('./bloks/SbImageGrid/SbImageGrid')),
};
