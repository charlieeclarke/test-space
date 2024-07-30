import type { FeaturedPostsComponent } from './types';

import { GridColumn, Grid } from '@components/Grid';

import styles from './FeaturedPosts.module.scss';
import { BlogCard } from '..';

export const FeaturedPosts: FeaturedPostsComponent = ({ Title, items }) => {
  return (
    <>
      <Grid as="section" className={styles.container}>
        <GridColumn sm={12}>{Title}</GridColumn>
        {items &&
          items.length > 0 &&
          items.map((post) => {
            return (
              <GridColumn sm={12} md={3} key={post?.id}>
                <BlogCard
                  title={post?.name}
                  description={post.content.description}
                  image={post.content?.storyImage?.filename}
                  alt={post.content?.storyImage?.alt}
                  link={`/blog/${post.slug}`}
                  buttonText="Read more"
                  date={post?.first_published_at}
                />
              </GridColumn>
            );
          })}
      </Grid>
    </>
  );
};

export default FeaturedPosts;
