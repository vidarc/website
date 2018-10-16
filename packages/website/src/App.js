// @flow

import * as React from 'react'
import { Router } from '@reach/router'
import { css, injectGlobal } from 'emotion'

import { Navigation } from './components/Navigation'
import { loadableComponent } from './components/Loading'
import NotFound from './components/NotFound'

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

const AsyncHome = loadableComponent({ loader: () => import('./modules/home') })
const AsyncStarWars = loadableComponent({
  loader: () => import('./modules/starwars'),
})
const AsyncTodo = loadableComponent({ loader: () => import('./modules/todo') })

const App = () => (
  <div className={style}>
    <Navigation />
    <Router>
      <AsyncHome path='/' />
      <AsyncStarWars path='/starwars' />
      <AsyncTodo path='tdod' />
      <NotFound default />
    </Router>
  </div>
)

export default App
