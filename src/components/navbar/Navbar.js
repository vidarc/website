import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NavbarMenu from './NavbarMenu'
import NavbarSidebar from './NavbarSidebar'
import './Navbar.css'

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      admin: false
    }
  }

  render() {
    let links = [
      { content: 'My Blog', to: '/blog' },
      { content: 'About Page', to: '/about' },
      { content: 'My Resume', to: '/resume' },
      { content: 'Contact Me', to: '/contact' }
    ]

    return(
      <Grid>
        <Grid.Column width={16} className='computer tablet only'>
          <Grid.Row>
            <NavbarMenu links={links} admin={this.state.admin} />
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
}
