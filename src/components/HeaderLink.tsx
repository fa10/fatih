import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { lighten, darken } from 'polished';
import { Theme } from './theme';

type HeaderLinkProps = LinkProps & {
  children: React.ReactNode;
  color?: string;
};

function HeaderLink({ color, children, href, ...props }: HeaderLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href} passHref={true} {...props}>
      <a
        css={(theme: Theme) => ({
          fontFamily: theme.typography.fontFamily,
          fontSize: '1.2em',
          padding: '5px 7.5px',
          borderRadius: '5px',
          fontWeight: 'normal',
          textDecoration: 'none',
          letterSpacing: '0.025em',
          color:
            color || (isActive ? theme.colors.white : theme.colors.secondary),
          '&:hover,&:focus': {
            background: color ? 'none' : darken(0.05, theme.colors.primary),
            color: color || theme.colors.white,
          },
        })}
      >
        {children}
      </a>
    </Link>
  );
}

export { HeaderLink };
