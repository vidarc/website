import React from 'react'
import { Route } from 'react-router-dom'

const Routes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

const routeHelper = (routes) => (
  routes.map((route, i) => <Routes key={i} {...route} />)
)

export default routeHelper
