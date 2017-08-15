import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import { LoginButton } from '../Login'

const processLinks = links =>
  links.map(link => <Menu.Item key={link.id} content={link.content} as={Link} to={link.to} />)

const NavbarMenu = props =>
  (<Menu stackable size='tiny'>
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
  </Menu>)

NavbarMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NavbarMenu
