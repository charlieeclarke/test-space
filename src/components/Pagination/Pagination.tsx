import { Icon } from '@components/Icon';

import styles from './Pagination.module.scss';

import type { PaginationComponent } from './types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export const Pagination: PaginationComponent = ({ page, pageSize, total }) => {
  const router = useRouter();
  const currPath = router?.pathname;
  const currPathPageStripped = currPath.split('page/')[0];
  const searchParams = useSearchParams();

  const baseClass = 'pagination';
  const classes = {
    pagination: styles[baseClass],
    link: styles[`${baseClass}__link`],
    linkActive: styles[`${baseClass}__link--active`],
    prevLink: styles[`${baseClass}__link--prev`],
    prevLinkIcon: styles[`${baseClass}__link--prev__icon`],
    nextLink: styles[`${baseClass}__link--next`],
    nextLinkIcon: styles[`${baseClass}__link--next__icon`],
    disabled: styles.disabled,
  };

  const totalPages = Math.ceil(total / pageSize);

  const getPageNumbers = (maxPageNumberIndicators = 9): number[] => {
    const pageNumbers = [];
    if (totalPages < maxPageNumberIndicators) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const extraNumbers = Math.floor((maxPageNumberIndicators - 1) / 2);
      if (page > extraNumbers) {
        if (page + extraNumbers > totalPages) {
          const startingAt = totalPages - maxPageNumberIndicators + 1;
          for (let pageCursor = startingAt; pageCursor <= totalPages; pageCursor++) {
            pageNumbers.push(pageCursor);
          }
        } else {
          for (let i = page - extraNumbers; i <= Math.min(page + extraNumbers, totalPages); i++) {
            pageNumbers.push(i);
          }
        }
      } else {
        for (let i = 1; i <= maxPageNumberIndicators; i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  const pageLink = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    // NextJS adds catch all route "number" as a param ¯\_(ツ)_/¯
    params.delete('number');

    return {
      pathname: currPathPageStripped.endsWith('/')
        ? `${currPathPageStripped}page/${pageNumber}`
        : `${currPathPageStripped}/page/${pageNumber}`,
      query: params.toString(),
    };
  };

  return (
    <div className={classes.pagination}>
      <Link
        href={pageLink(page === 1 ? page : page - 1)}
        className={[classes.link, page === 1 && classes.disabled, classes.prevLink].join(' ')}
      >
        <Icon iconName="arrow" stroke="black" width={24} height={24} />
      </Link>
      {getPageNumbers().map((pageNumber) => (
        <Link
          key={pageNumber}
          href={pageLink(pageNumber)}
          className={[classes.link, page === pageNumber && classes.linkActive].join(' ')}
        >
          {pageNumber}
        </Link>
      ))}
      <Link
        href={pageLink(page === totalPages ? page : page + 1)}
        className={[classes.link, page === totalPages && classes.disabled, classes.nextLink].join(' ')}
      >
        <Icon iconName="arrow" stroke="black" width={24} height={24} />
      </Link>
    </div>
  );
};

export default Pagination;
