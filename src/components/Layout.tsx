import Head from 'next/head';
import { ThemeProvider } from 'emotion-theming';
import { Header } from './Header';
import { theme } from './theme';

function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header siteTitle="Fatih" />
        {children}
      </ThemeProvider>
    </>
  );
}

export { Layout };
