import { Router } from '@reach/router'
import { css, injectGlobal } from 'emotion'
import * as React from 'react'
import 'sanitize.css'

import Loading from './Loading'
import { Navigation } from './Navigation'
import NotFound from './NotFound'

// tslint:disable-next-line:no-unused-expression
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

const AsyncHome = React.lazy(() => import('../modules/Home/Home'))
const AsyncStarWars = React.lazy(() =>
  import('../modules/StarWarsApp/StarWarsApp'),
)
const AsyncTodo = React.lazy(() => import('../modules/TodoApp/TodoApp'))

const App: React.FunctionComponent = () => (
  <div className={style}>
    <Navigation />
    <React.Suspense fallback={<Loading />}>
      <Router>
        <AsyncHome path='/' />
        <AsyncStarWars path='starwars/*' />
        <AsyncTodo path='todo' />
        <NotFound default={true} />
      </Router>
    </React.Suspense>
  </div>
)

export default App
