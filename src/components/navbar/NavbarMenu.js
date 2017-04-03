import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import { LoginButton } from '../Login'

const processLinks = (links) => {
  return links.map((link, index) => (
    <Menu.Item key={index} content={link.content} as={Link} to={link.to} />
  ))
}

const NavbarMenu = (props) => {
  return (
    <Menu stackable size='tiny'>
      <Menu.Item content='Home Page' as={Link} to='/' />
      {processLinks(props.links)}
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item>
          <LoginButton />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default NavbarMenu
