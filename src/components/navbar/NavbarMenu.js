import React, { Component } from 'react'
import {
  IndexLink,
  Link
} from 'react-router'
import {
  Menu
} from 'semantic-ui-react'
import Login from '../login/Login'

export default class NavbarMenu extends Component {
  processLinks(links) {
    return links.map((link, index) => (
      <Menu.Item key={index} content={link.content} as={Link} to={link.to} />
    ))
  }

  render() {
    return(
      <Menu stackable size='tiny' className='computer tablet only'>
        <Menu.Item content='Home Page' as={IndexLink} to='/' />
        {this.processLinks(this.props.links)}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Login auth={this.props.auth} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
