import type { ItemsComponent } from './types';

import { BlogCard } from '../BlogCard/BlogCard';

export const Items: ItemsComponent = ({ posts }) => {
  if (!posts) {
    return null;
  }
  return (
    <>
      {posts.map((post, i: number) => (
        <BlogCard
          key={i}
          title={post?.name}
          description={post.content.description}
          image={post.content?.storyImage?.filename}
          alt={post.content?.storyImage?.alt}
          link={`/blog/${post.slug}`}
          buttonText="Read more"
          date={post?.first_published_at}
        />
      ))}
    </>
  );
};
export default Items;
