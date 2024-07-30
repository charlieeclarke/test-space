import styles from './Article.module.scss';

import { ArticleComponent } from './types';

export const Article: ArticleComponent = ({ children }) => {
  return (
    <div className={styles.article}>
      <article className={styles.article__content}>{children}</article>
    </div>
  );
};

export default Article;
