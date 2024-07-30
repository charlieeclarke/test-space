import type { BlogLayoutType } from './types';

import { FiltersProvider } from '@on/context/FiltersProvider';

export const BlogLayout: BlogLayoutType = ({ children, blog }) => {
  return <FiltersProvider filters={blog?.Tags?.items}>{children}</FiltersProvider>;
};
export default BlogLayout;
