import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Image } from 'semantic-ui-react'

const NotFound = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <Container style={style}>
      <Image src='https://http.cat/404' size='big' shape='rounded' />
    </Container>
  )
}

const Routes = route =>
  (<Route
    exact={route.exact}
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />)

const routeHelper = routes =>
  (<Switch>
    {routes.map((route, i) => <Routes key={i} {...route} />)}
    <Route component={NotFound} />
  </Switch>)

export default routeHelper
