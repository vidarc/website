import React from 'react'
import { Container, List } from 'semantic-ui-react'
import { LinkList } from './'
import routeHelper from '../../utils/routeHelper'
import metLogo from '../../images/the_met_logo.png'
import reddit from '../../images/snoovatar.png'

const links = [
  {
    id: 1,
    image: metLogo,
    path: '/projects/art',
    description: 'Art from the Met Museum'
  },
  {
    id: 2,
    image: reddit,
    path: '/projects/reddit',
    description: 'Reddit API'
  }
]

const Projects = ({routes}) => (
  <Container fluid>
    <Container fluid textAlign='center'>
      <List celled horizontal relaxed>
        {links.map((link) => <LinkList key={link.id} link={link} /> )}
      </List>
    </Container>
    {routeHelper(routes)}
  </Container>
)

export default Projects
