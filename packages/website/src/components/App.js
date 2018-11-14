// @flow

import * as React from 'react'
import { Router } from '@reach/router'
import { css, injectGlobal } from 'emotion'

import { Navigation } from './Navigation'
import Loading from './Loading'
import NotFound from './NotFound'

import 'sanitize.css'

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

const AsyncHome = React.lazy(() => import('../modules/home'))
const AsyncStarWars = React.lazy(() => import('../modules/starwars'))
const AsyncTodo = React.lazy(() => import('../modules/todo'))

const App = () => (
  <div className={style}>
    <Navigation />
    <React.Suspense fallback={<Loading />}>
      <Router>
        <AsyncHome path='/' />
        <AsyncStarWars path='starwars/*' />
        <AsyncTodo path='todo' />
        <NotFound default />
      </Router>
    </React.Suspense>
  </div>
)

export default App
