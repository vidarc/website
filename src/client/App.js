// @flow

import React from 'react'
import { Container } from 'semantic-ui-react'
import routeHelper from './utils/routeHelper'
import routeConfig from './routes.config'

const App = () => <Container className='flex-container'>{routeHelper(routeConfig)}</Container>

export default App
