import * as React from 'react'

import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Router } from '@reach/router'
import 'sanitize.css'

import Loading from './Loading'
import { Navigation } from './Navigation'
import NotFound from './NotFound'

const globalStyles = css`
  body {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    text-align: center;
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
`

const StyledDiv = styled.div`
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
  <StyledDiv>
    <Global styles={globalStyles} />
    <Navigation />
    <React.Suspense fallback={<Loading />}>
      <Router>
        <AsyncHome path='/' />
        <AsyncStarWars path='starwars/*' />
        <AsyncTodo path='todo' />
        <NotFound default={true} />
      </Router>
    </React.Suspense>
  </StyledDiv>
)

export default App
