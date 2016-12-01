import React, { Component } from 'react'
import {
  IndexLink,
  Link
} from 'react-router'
import {
  Button,
  Menu
} from 'semantic-ui-react'
import './Navbar.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return <Menu stackable size='tiny'>
      <Menu.Item content='Home Page' as={IndexLink} to='/' />
      <Menu.Item content='My Blog' as={Link} to='/blog' />
      <Menu.Item content='About Page' as={Link} to='/about' />
      <Menu.Item content='My Resume' as={Link} to='/resume' />
      <Menu.Item content='Contact Me' as={Link} to='/contact' />
      <Menu.Item content='Admin Page' as={Link} to='/admin' />
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/login'>
          <Button primary>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  }
}
