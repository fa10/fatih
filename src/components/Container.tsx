import * as React from 'react';
import { css } from '@emotion/core';

function Container({ maxWidth = 1024, children, ...restProps }) {
  const fullMaxWidth = Number.isNaN(Number(maxWidth))
    ? maxWidth
    : `${maxWidth + 40}px`;

  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${fullMaxWidth};
        padding: 0 20px;
        box-sizing: border-box;
      `}
      {...restProps}
    >
      {children}
    </div>
  );
}

export { Container };
