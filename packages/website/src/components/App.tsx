import React from 'react'

import { Router } from '@reach/router'

import ErrorBoundary from './ErrorBoundary'
import Loading from './Loading'
import { Navigation } from './Navigation'
import NotFound from './NotFound'
import { UserProvider } from '../context/User'

const AsyncHome = React.lazy(() => import('../modules/home/Home'))
const AsyncStarWars = React.lazy(() => import('../modules/starWarsApp/StarWarsApp'))
const AsyncTodo = React.lazy(() => import('../modules/todoApp/TodoApp'))
const AsyncGameOfLife = React.lazy(() => import('../modules/gameOfLife/GameOfLife'))
const AsyncGallery = React.lazy(() => import('../modules/gallery/Gallery'))

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <UserProvider>
      <Navigation />
      <React.Suspense fallback={<Loading />}>
        <Router>
          <AsyncHome path="/" />
          <AsyncStarWars path="starwars/*" />
          <AsyncTodo path="todo" />
          <AsyncGameOfLife path="gameoflife" />
          <AsyncGallery path="gallery" />
          <NotFound default />
        </Router>
      </React.Suspense>
    </UserProvider>
  </ErrorBoundary>
)

export default App
