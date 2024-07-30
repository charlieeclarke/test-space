import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type SearchState = 'mobile' | 'desktop';

type SearchProps = HTMLAttributes<HTMLDivElement> & {
  state?: SearchState;
};

export type SearchComponent = FC<PropsWithChildren<SearchProps>>;
