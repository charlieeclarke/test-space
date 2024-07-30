import { TagsComponent } from './types';
import { Link } from '@components/Link';
import styles from './Tags.module.scss';

export const Tags: TagsComponent = ({ tags }) => {
  return (
    <ul className={styles.tags}>
      {tags?.map((tag: any) => (
        <li key={tag.id}>
          <Link href={tag?.full_slug} className={styles.tag}>
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
