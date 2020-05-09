import * as React from 'react';
import { useTheme } from 'emotion-theming';
import FullPageSection from 'components/FullPageSection';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { theme } from 'components/theme';
import { darken } from 'polished';
import css from '@styled-system/css';

function HomePage() {
  return (
    <Layout pageTitle="Fatih Kupelikilinc">
      <FullPageSection>
        <Container>
          <h1
            css={css({
              fontFamily: theme.typography.fontFamily,
              textTransform: 'uppercase',
              fontSize: ['3em', '5em'],
              color: '#d9d9d9',
              margin: 0,
            })}
          >
            Design to code
          </h1>
          <p
            css={css({
              fontFamily: theme.typography.fontFamily,
              fontSize: '2em',
              color: darken(0.1, '#d9d9d9'),
              margin: 0,
              maxWidth: ['unset', '50vw'],
            })}
          >
            Follow my journey to transform code to products. Explore blog posts,
            code samples about real life enterprise solutions.
          </p>
        </Container>
      </FullPageSection>
    </Layout>
  );
}

export default HomePage;
