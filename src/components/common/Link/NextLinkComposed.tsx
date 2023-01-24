/* eslint-disable @typescript-eslint/indent, react/jsx-props-no-spreading */

import { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { styled } from '@/styles/utils';

// Add support for the sx prop for consistency with the other branches.
export const Anchor = styled('a')({});

export interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'> {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
}

export default forwardRef<HTMLAnchorElement, NextLinkComposedProps>((props, ref) => {
  const {
    to,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior = true,
    locale,
    ...other
  } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  );
});
