// @flow

import React from 'react'
import { injectGlobal } from 'emotion'
import 'normalize.css'

import routeHelper from './utils/routeHelper'
import routes from './routes.config'

injectGlobal`
  body {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    text-align: center;

    & div {
      text-align: left;
      margin: 0 auto;
      width: 1024px;
    }
  }

  button {
    border-radius: 5px;
    padding: 5px 10px;
  }
`

const App = () => <div>{routeHelper(routes)}</div>

export default App
