import { FunctionComponent, lazy, Suspense } from 'react'
import { Router } from '@reach/router'

import ErrorBoundary from './ErrorBoundary'
import Loading from './Loading'
import { Navigation } from './Navigation'
import NotFound from './NotFound'
import { UserProvider } from '../context/User'

const AsyncHome = lazy(() => import('../modules/home/Home'))
const AsyncStarWars = lazy(() => import('../modules/starWarsApp/StarWarsApp'))
const AsyncTodo = lazy(() => import('../modules/todoApp/TodoApp'))
const AsyncGameOfLife = lazy(() => import('../modules/gameOfLife/GameOfLife'))
const AsyncGallery = lazy(() => import('../modules/gallery/Gallery'))
const AsyncMashin = lazy(() => import('../modules/mashin/Mashin'))

const App: FunctionComponent = () => (
  <ErrorBoundary>
    <UserProvider>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Router>
          <AsyncHome path="/" />
          <AsyncStarWars path="starwars/*" />
          <AsyncTodo path="todo" />
          <AsyncGameOfLife path="gameoflife" />
          <AsyncGallery path="gallery" />
          <AsyncMashin path="mashin" />
          <NotFound default />
        </Router>
      </Suspense>
    </UserProvider>
  </ErrorBoundary>
)

export default App
