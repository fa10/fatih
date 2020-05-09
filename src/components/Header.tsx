import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { HeaderLink } from './HeaderLink';
import { Container } from './Container';
import { Theme } from './theme';

type HeaderProps = {
  siteTitle: string;
};

function Header({ siteTitle }: HeaderProps) {
  const theme: Theme = useTheme();
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 30px 0 0 0;
        background: none;
        z-index: 10;
        position: absolute;
        top: 0;
      `}
    >
      <Container>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <HeaderLink href="/" color={theme.colors.secondary}>
            {siteTitle}
          </HeaderLink>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
            `}
          >
            <HeaderLink href="/blog">Blog</HeaderLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export { Header };
