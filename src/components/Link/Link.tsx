import type { LinkComponent } from './types';
import NextLink from 'next/link';
import { getLink } from '@on/utils/getLink';
import { useRouter } from 'next/router';

export const Link: LinkComponent = ({ href, children, className, locale, target, linktype }) => {
  const router = useRouter();
  if (linktype === 'email') {
    // Email links: add `mailto:` scheme and map to <a>
    return <a href={href && `mailto:${href}`}>{children}</a>;
  }

  return linktype === 'story' ? (
    <NextLink
      href={getLink(href, router?.defaultLocale, router?.locale)}
      locale={locale}
      className={className}
      target={target}
    >
      {children}
    </NextLink>
  ) : (
    <a href={href as string} className={className} target={target || '_blank'} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
