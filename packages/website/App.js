// @flow

import React from 'react'
import { Container } from 'semantic-ui-react'
import routeHelper from './utils/routeHelper'
import routes from './routes.config'

import { type Film } from '@mattailes/common/types/StarWars'

const App = () => <Container>{routeHelper(routes)}</Container>

export default App
