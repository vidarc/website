import React, { Component } from 'react'
import {
  IndexLink,
  Link
} from 'react-router'
import {
  Input,
  Menu
} from 'semantic-ui-react'
import LoginButton from '../login/LoginButton'

export default class NavbarMenu extends Component {

  processLinks(links) {
    return links.map((link, index) => (
      <Menu.Item key={index} content={link.content} as={Link} to={link.to} />
    ))
  }

  render() {
    return(
      <Menu stackable size='tiny'>
        <Menu.Item content='Home Page' as={IndexLink} to='/' />
        {this.processLinks(this.props.links)}
        {this.props.auth.isAdmin() ?
          <Menu.Item content='Admin' as={Link} to='/admin' /> :
          null }
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
            <LoginButton auth={this.props.auth} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
