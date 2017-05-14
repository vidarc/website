// @flow

import React from 'react'
import { Container } from 'semantic-ui-react'
import routeHelper from '../../utils/routeHelper'
import routeConfig from '../../routes.config'
import Navbar from '../Navbar'
import Footer from '../Footer'

const App = () => (
  <Container className='flex-container'>
    <Navbar />
    {routeHelper(routeConfig)}
    <Footer />
  </Container>
)

export default App
