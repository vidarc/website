import React, { useState } from 'react'

import styled from '@emotion/styled'
import { Link } from '@reach/router'

import avatar from '../../images/avatar-small.png'

import { StyledNav, StyledSubmenu, SubmenuItems } from './StyledComponents'

const AvatarImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin: 0;
`

const Navigation: React.FunctionComponent = () => {
  const [showSubmenu, setSubmenu] = useState(false)

  const handleSubmenuClick = () => setSubmenu(!showSubmenu)

  const handleSubmenuHover = () => console.log('hello')

  return (
    <StyledNav>
      <AvatarImg src={avatar} alt='avatar' />
      <Link to='/'>Home</Link>
      <StyledSubmenu
        role='menu'
        tabIndex={0}
        onClick={handleSubmenuClick}
        onKeyPress={handleSubmenuClick}
        onMouseEnter={handleSubmenuHover}
        onMouseLeave={handleSubmenuHover}
      >
        <p>Projects</p>
        <SubmenuItems show={showSubmenu}>
          <Link to='/todo' role='menuitem'>
            Todo
          </Link>
          <hr />
          <Link to='/starwars' role='menuitem'>
            Star Wars GraphQL
          </Link>
          <hr />
          <Link to='/gameoflife' role='menuitem'>
            Conway's Game of Life
          </Link>
          <hr />
          <Link to='/reason' role='menuitem'>
            Reason React
          </Link>
        </SubmenuItems>
      </StyledSubmenu>
    </StyledNav>
  )
}

export default Navigation
