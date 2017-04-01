import React from 'react'
import { Route } from 'react-router-dom'
import { Container, List } from 'semantic-ui-react'
import LinkList from './LinkList'
import metLogo from '../../images/the_met_logo.png'

const Routes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

const links = [
  {
    id: 1,
    image: metLogo,
    path: '/projects/art',
    description: 'Art from the Met Museum'
  }
]

const Projects = ({routes}) => (
  <Container textAlign='center' fluid text>
    <List celled horizontal relaxed>
      {links.map((link) => <LinkList key={link.id} link={link} /> )}
    </List>
    {routes.map((route, i) => (
      <Routes key={i} {...route} />
    ))}
  </Container>
)

export default Projects
