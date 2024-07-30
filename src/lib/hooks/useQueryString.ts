import { FiltersQueryString } from '@components/Filters/FiltersQueryString.enum';
import { OnChangeHandler } from '@components/Filters/types';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
}

export const useQueryString = () => {
  const { query, pathname: routerPathname, ...router } = useRouter();
  const searchTerm = query[FiltersQueryString.SEARCH];
  const [pathname, setPathname] = useState<string>(routerPathname);

  const updatePageUrl = (page: number) => {
    let _pathname = pathname.split('/page')[0];
    if (page) {
      _pathname += `/page/${page}`;
    }
    return { pathname: _pathname, query };
  };

  const createRouterQuery = useCallback(
    (name: FiltersQueryString, value: string) => {
      const params = { ...query };

      const isPageQuery = name === FiltersQueryString.PAGE;
      if (!isPageQuery) {
        if (!value && params[name]) delete params[name];
        else params[name] = value;
      }

      if (value && isPageQuery) {
        const { pathname: _pathname } = updatePageUrl(Number(value));
        setPathname(_pathname);
      } else {
        setPathname(routerPathname);
      }

      return params;
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, routerPathname]
  );

  const updateQueryParams =
    (name: FiltersQueryString, options?: TransitionOptions): OnChangeHandler =>
    (e) => {
      const isPageQuery = name === FiltersQueryString.PAGE;
      if (isPageQuery) {
        const { pathname, query } = updatePageUrl(Number(e.target.value));
        return void router.push({ pathname, query }, undefined, options);
      }

      const query = createRouterQuery(name, e.target.value);
      return void router.push({ query }, undefined, options);
    };

  const updateSearchQuery = debounce((e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    void router.push({ pathname, query: createRouterQuery(FiltersQueryString.SEARCH, searchTerm as string) });
  }, 500);

  const clearSearchQuery = () =>
    void router.push({ pathname, query: createRouterQuery(FiltersQueryString.SEARCH, null) });

  return { searchParams: query, updateQueryParams, createRouterQuery, updateSearchQuery, searchTerm, clearSearchQuery };
};
