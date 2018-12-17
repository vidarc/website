import React from 'react'

import styled from '@emotion/styled'
import { Router } from '@reach/router'
import 'sanitize.css'

import ErrorBoundary from './ErrorBoundary'
import GlobalStyles from './GlobalStyles'
import Loading from './Loading'
import { Navigation } from './Navigation'
import NotFound from './NotFound'

const StyledDiv = styled.div`
  text-align: left;
  margin: 0 auto;
  max-width: 1024px;
`

const AsyncHome = React.lazy(() => import('../modules/Home/Home'))
const AsyncStarWars = React.lazy(() =>
  import('../modules/StarWarsApp/StarWarsApp')
)
const AsyncTodo = React.lazy(() => import('../modules/TodoApp/TodoApp'))
const AsyncGameOfLife = React.lazy(() =>
  import('../modules/GameOfLife/GameOfLife')
)

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <StyledDiv>
      <GlobalStyles />
      <Navigation />
      <React.Suspense fallback={<Loading />}>
        <Router>
          <AsyncHome path='/' />
          <AsyncStarWars path='starwars/*' />
          <AsyncTodo path='todo' />
          <AsyncGameOfLife path='gameoflife' />
          <NotFound default={true} />
        </Router>
      </React.Suspense>
    </StyledDiv>
  </ErrorBoundary>
)

export default App
