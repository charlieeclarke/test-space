import type { ImageWithTextContentComponent } from './types';

import styles from './ImageWithTextContent.module.scss';

export const ImageWithTextContent: ImageWithTextContentComponent = ({ children, imageLast }) => {
  return (
    <div className={[styles.ImageWithTextContent, imageLast ? styles.ImageWithTextContentImageLast : ''].join(' ')}>
      {children}
    </div>
  );
};

export default ImageWithTextContent;
