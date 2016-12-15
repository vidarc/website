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

  componentDidMount() {
    let profile = this.props.auth.getProfile()
    this.setState({
      admin: profile.admin
    })
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
            <NavbarMenu links={links} auth={this.props.auth} admin={this.state.admin} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={16} className='mobile only'>
          <Grid.Row>
            <NavbarSidebar links={links} auth={this.props.auth} />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}
