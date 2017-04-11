import React from 'react'
import { Grid } from 'semantic-ui-react'
import { NavbarMenu, NavbarSidebar } from './'
import './Navbar.css'

const Navbar = () => {
  const links = [
    { id: 1, content: 'My Blog', to: '/blog' },
    { id: 2, content: 'About Page', to: '/about' },
    { id: 3, content: 'Projects', to: '/projects' },
    { id: 4, content: 'My Resume', to: '/resume' },
    { id: 5, content: 'Contact Me', to: '/contact' },
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
