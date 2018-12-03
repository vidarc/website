import { RouteComponentProps } from '@reach/router'
import { css } from 'emotion'
import * as React from 'react'

const className = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound: React.SFC<RouteComponentProps> = () => (
  <div className={className}>
    <img src='https://http.cat/404' alt='404 cat' />
  </div>
)

export default NotFound
