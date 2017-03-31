import React from 'react'
import { Link, Route } from 'react-router-dom'

const Routes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

const Projects = ({routes}) => (
  <div>
    <p>
      <Link to='/projects/art'>Art from the Met Museum</Link>
    </p>
    {routes.map((route, i) => (
      <Routes key={i} {...route} />
    ))}
  </div>
)

export default Projects
