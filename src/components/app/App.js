import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import routeConfig from '../../routes.config.js'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Routes = (route) => (
  <Route exact path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

const App = () => (
  <Router>
    <Container className='flex-container'>
      <Navbar />
      {routeConfig.map((route, i) => (
        <Routes key={i} {...route} />
      ))}
      <Footer />
    </Container>
  </Router>
)

export default App
