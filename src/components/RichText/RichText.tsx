import type { RichTextComponent } from './types';
import React from 'react';
import { Link } from '@components/Link';
import { render, MARK_LINK, MARK_SUPERSCRIPT, MARK_SUBSCRIPT, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import styles from './RichText.module.scss';
import { Image } from '@components/Image';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';
import { VideoWrapper } from '@components/VideoWrapper';
import { Table } from '@components/Table';

export const RichText: RichTextComponent = ({
  content,
  align = 'left',
  maxWidth,
  isSectionCentered,
  largeParagraphText,
}) => {
  return (
    <div
      style={{
        textAlign: (align as 'left') || 'left',
        maxWidth: maxWidth ? `${maxWidth}px` : 'unset',
        margin: isSectionCentered ? '0 auto' : '0',
      }}
      className={largeParagraphText ? `${styles.richtextContent} large-text` : styles.richtextContent}
    >
      {render(content, {
        defaultBlokResolver: () => {
          return <p>No component found</p>;
        },
        blokResolvers: {
          ['Video']: (props: any) => {
            const vidUrl = props.video_url.url;
            return <VideoWrapper url={vidUrl} />;
          },
          ['Table']: (props: any) => {
            return <Table thead={props.table.thead} tbody={props.table.tbody} />;
          },
        },
        markResolvers: {
          [MARK_LINK]: (children, props) => {
            const { href, target, linktype } = props;
            if (href?.match(/^(https?:)?\/\//)) {
              // External links: map to <a>
              return (
                <a href={href} target={target}>
                  {children}
                </a>
              );
            }
            // Internal links: map to <Link>
            return (
              <Link linktype={linktype} href={href || ''}>
                {children}
              </Link>
            );
          },
          [MARK_SUPERSCRIPT]: (children) => {
            return <sup>{children}</sup>;
          },
          [MARK_SUBSCRIPT]: (children) => {
            return <sub>{children}</sub>;
          },
        },
        nodeResolvers: {
          [NODE_IMAGE]: (children, props) => {
            const imageTitle = props?.title;
            return imageTitle ? (
              <figure>
                <Image
                  sourceSetPathFormatter={getImageSourceSetPaths}
                  loading="lazy"
                  src={props.src}
                  alt={props.alt || ''}
                  as="div"
                />
                <p>{imageTitle}</p>
              </figure>
            ) : (
              <>
                <Image
                  sourceSetPathFormatter={getImageSourceSetPaths}
                  loading="lazy"
                  src={props.src}
                  alt={props.alt || ''}
                />
              </>
            );
          },
        },
      })}
    </div>
  );
};

export default RichText;
