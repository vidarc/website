import React from 'react'

import { css, Global } from '@emotion/core'

export default () => (
  <Global
    styles={css`
      body {
        box-sizing: border-box;

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        a {
          text-decoration: none;
        }
      }
    `}
  />
)
