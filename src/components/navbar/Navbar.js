import React from 'react'
import { Grid } from 'semantic-ui-react'
import NavbarMenu from './NavbarMenu'
import NavbarSidebar from './NavbarSidebar'
import './Navbar.css'

const Navbar = (props) => {
  let links = [
    { content: 'My Blog', to: '/blog' },
    { content: 'About Page', to: '/about' },
    { content: 'Projects', to: '/projects' },
    { content: 'My Resume', to: '/resume' },
    { content: 'Contact Me', to: '/contact' },
  ]

  return (
    <Grid>
      <Grid.Column width={16} className='computer tablet only'>
        <Grid.Row>
          <NavbarMenu links={links} />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={16} className='mobile only'>
        <Grid.Row>
          <NavbarSidebar links={links} />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default Navbar
