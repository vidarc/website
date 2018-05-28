// @flow

import React from 'react'
import { css, injectGlobal } from 'emotion'

import routeHelper from './utils/routeHelper'
import routes from './routes.config'

injectGlobal`
  body {
    font-size: 1em;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    text-align: center;
  }
`

const wrapper = css`
  text-align: left;
  margin: 0 auto;
  width: 1024px;
`

const App = () => <div className={wrapper}>{routeHelper(routes)}</div>

export default App
