import type { BlogContentComponent } from './types';
import { ImageSizes } from '@components/Image/types';

import { GridColumn, Grid } from '@components/Grid';

import { RichText } from '@components/RichText';
import { Link } from '@components/Link';

import styles from './BlogContent.module.scss';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';
import { Image } from '@components/Image';
import { useRouter } from 'next/router';
import { BlogPosting } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

export const BlogContent: BlogContentComponent = ({
  blok: { title, description, storyImage, publicationDate, content, relatedPosts, tags },
}): JSX.Element => {
  const router = useRouter();
  const dateFormatted = new Date(publicationDate || null).toLocaleDateString(router.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sizes: ImageSizes = {
    375: 100,
    767: 100,
    1024: 100,
    1400: 100,
  };

  return (
    <article className={styles.postContent}>
      <JsonLd<BlogPosting>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          ...(storyImage && { image: storyImage.filename }),
          datePublished: publicationDate,
        }}
      />
      <Grid className={styles.container}>
        <GridColumn sm={12} lg={10}>
          {title && <h1>{title}</h1>}
          {description && <h2>{description}</h2>}
          {publicationDate && (
            <p className={styles.publicationDate}>
              {dateFormatted} <time dateTime={`${publicationDate}`}></time>
            </p>
          )}

          {storyImage && (
            <div className={styles.postContentImageWrapper}>
              <Image
                src={storyImage.filename}
                alt={storyImage.alt}
                sizes={sizes}
                sourceSetPathFormatter={getImageSourceSetPaths}
                height={300}
              />
            </div>
          )}

          <RichText content={content} />

          {tags && !!tags.length && (
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag.id}>
                  <Link href={tag.full_slug} className={styles.tag}>
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn sm={12}>
          <h3>Related posts</h3>
        </GridColumn>
        {relatedPosts?.map((post: any) => (
          <GridColumn sm={12} md={4} lg={4} key={post.id}>
            <Link href={post?.full_slug} linktype="story">
              {post?.name}
            </Link>
          </GridColumn>
        ))}
      </Grid>
    </article>
  );
};
export default BlogContent;
