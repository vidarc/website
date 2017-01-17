import React, { Component } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import LoginButton from '../login/LoginButton'

export default class NavbarMenu extends Component {

  _processLinks(links) {
    return links.map((link, index) => (
      <Menu.Item key={index} content={link.content} as={Link} to={link.to} />
    ))
  }

  render() {
    return (
      <Menu stackable size='tiny'>
        <Menu.Item content='Home Page' as={IndexLink} to='/' />
        {this._processLinks(this.props.links)}
        {this.props.auth.isAdmin() ? <Menu.Item content='Admin' as={Link} to='admin' /> : null}
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
