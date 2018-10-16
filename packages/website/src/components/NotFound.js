// @flow

import * as React from 'react'
import { css } from 'emotion'

const className = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound = () => (
  <div className={className}>
    <img src='https://http.cat/404' alt='404 cat' />
  </div>
)

export default NotFound
