import type { BlogListComponent } from './types';

import { Items } from './Items';
import { Pagination } from '@components/Pagination';
import { GridColumn, Grid } from '@components/Grid';
import { Filters, FiltersOptions } from '@components/Filters';
import { Search } from '@components/Search';

import styles from './BlogList.module.scss';
import { FiltersQueryString } from '@components/Filters/FiltersQueryString.enum';

export const BlogList: BlogListComponent = ({ page, pagination, total, posts, posts_per_page }) => {
  const staticPagination = {
    page: page,
    pageSize: posts_per_page,
    total: total,
  };

  const sortingOptions = [FiltersQueryString.SORT, FiltersQueryString.TAG];

  return (
    <>
      <Filters filterTypes={sortingOptions} />
      <Search state="desktop" />
      <Search state="mobile" />
      <Grid as="section" className={styles.container}>
        <GridColumn sm={12} noColumnPadding className="blogList">
          {posts && posts.length > 0 && <Items posts={posts as any} />}
          {pagination && posts_per_page < total ? (
            <Pagination
              page={staticPagination.page}
              pageSize={staticPagination.pageSize}
              total={staticPagination.total}
            />
          ) : null}
        </GridColumn>
      </Grid>
      <FiltersOptions state="mobile" filterTypes={sortingOptions} />
    </>
  );
};

export default BlogList;
