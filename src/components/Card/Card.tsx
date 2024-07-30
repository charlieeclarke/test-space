import type { CardComponent } from './types';

import styles from './Card.module.scss';
import { Link } from '@components/Link';

export const Card: CardComponent = ({ title, content, label, link, cta, children }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__content}>
        <h6>{label}</h6>
        {link.cached_url ? (
          <Link className={styles.card__imageLink} linktype="story" href={{ pathname: link.cached_url }}>
            {children}
          </Link>
        ) : (
          children
        )}
        <div>
          <h4>{title}</h4>
        </div>
        {content && <p>{content}</p>}
        {cta && <div className={styles.card__actions}>{cta}</div>}
      </div>
    </article>
  );
};
export default Card;
