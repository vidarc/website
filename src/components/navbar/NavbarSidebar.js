import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Icon,
  Input,
  Menu,
  Sidebar
} from 'semantic-ui-react'
import LoginButton from '../login/LoginButton'

export default class NavbarSidebar extends Component {

  state = {
    visible: false
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  processLinks(links) {
    return links.map((link, index) => (
      <Menu.Item key={index} content={link.content} as={Link} to={link.to} />
    ))
  }

  render() {
    return (
      <div>
        <Menu borderless icon='labeled' size='tiny'>
          <Menu.Item as={Link} to='/'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item onClick={this.toggleVisibility}>
              <Icon name='content' />
              Menu
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Sidebar as={Menu} animation='overlay' visible={this.state.visible} vertical onClick={this.toggleVisibility}>
          {this.processLinks(this.props.links)}
          {this.props.auth.isAdmin() ? <Menu.Item content='Admin' as={Link} to='admin' /> : null}
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
            <LoginButton auth={this.props.auth} />
          </Menu.Item>
        </Sidebar>
      </div>
    )
  }
}
