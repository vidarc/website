// @flow

import React from 'react'
import { css, injectGlobal } from 'emotion'
import 'sanitize.css'

import routeHelper from './utils/routeHelper'
import routes from './routes.config'
import { Navigation } from './components/Navigation'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;

    *, *:before, *:after {
      box-sizing: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`

const style = css`
  text-align: left;
  margin: 0 auto;
  max-width: 1024px;
`

const App = () => (
  <div className={style}>
    <Navigation />
    {routeHelper(routes)}
  </div>
)

export default App
