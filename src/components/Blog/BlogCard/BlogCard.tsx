import type { BlogCardComponent } from './types';
import { ImageSizes } from '@components/Image/types';
import { Image } from '@components/Image';
import { Link } from '@components/Link';
import styles from './BlogCard.module.scss';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';
import { ordinalDateString } from '@on/utils/ordinalDate';
import { useRouter } from 'next/router';

export const BlogCard: BlogCardComponent = (props) => {
  const { locale } = useRouter();

  const srcSetImages: ImageSizes = {
    375: 100,
    767: 100,
    1024: 100,
    1400: 100,
  };

  return (
    <Link href={props.link} className={styles.postCardLink} linktype="story">
      <article className={styles.postCard}>
        {props.image && (
          <div className={styles.postCardImageWrapper}>
            <div className={styles.postCardImage}>
              <Image
                src={props.image}
                alt={props.alt || ''}
                sizes={srcSetImages}
                sourceSetPathFormatter={getImageSourceSetPaths}
                height={400}
              />
            </div>
          </div>
        )}

        <time>{ordinalDateString(props.date, locale)}</time>

        <h3 className={styles.postCardTitle}>{props.title}</h3>

        <p className={styles.postCardDescription}>{props.description}</p>
        <p>{props.buttonText}</p>
      </article>
    </Link>
  );
};
export default BlogCard;
