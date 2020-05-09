import Document, { Html, Head, Main, NextScript } from 'next/document';
import { css } from '@emotion/core';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/vll4grc.css" />
        </Head>
        <body
          css={css`
            margin: 0;
            padding: 0;
          `}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
