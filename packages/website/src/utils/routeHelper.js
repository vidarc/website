import React from 'react'
import { Route, Switch } from 'react-router-dom'

const NotFound = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={style}>
      <img src='https://http.cat/404' alt='404 cat' />
    </div>
  )
}

const Routes = route => (
  <Route exact={route.exact} path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
)

const routeHelper = routes => (
  <Switch>
    {routes.map((route, i) => <Routes key={i} {...route} />)}
    <Route component={NotFound} />
  </Switch>
)

export default routeHelper
