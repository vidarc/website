import React, { Component } from 'react'
import {
  Grid
} from 'semantic-ui-react'
import NavbarMenu from './NavbarMenu'
import Sidebar from './Sidebar'
import './Navbar.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let links = [
      { content: 'My Blog', to: '/blog' },
      { content: 'About Page', to: '/about' },
      { content: 'My Resume', to: '/resume' },
      { content: 'Contact Me', to: '/contact' },
      { content: 'Admin Page', to: '/admin'}
    ]

    return(
      <Grid>
        <Grid.Column width={16}>
          <Grid.Row className='computer tablet only'>
            <NavbarMenu links={links} auth={this.props.auth} />
          </Grid.Row>
          <Grid.Row className='mobile only'>
            <Sidebar links={links}/>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}
