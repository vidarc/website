import React from 'react'

import styled from '@emotion/styled'
import { Link } from '@reach/router'

import avatar from '../../images/avatar-small.png'

import { StyledNav } from './StyledComponents'
import Submenu from './Submenu'

const AvatarImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin: 0;
`

const Navigation: React.FunctionComponent<{}> = () => {
  return (
    <StyledNav>
      <AvatarImg src={avatar} alt="avatar" />
      <Link to="/">Home</Link>
      <Submenu title="Projects">
        <Link to="/todo" role="menuitem">
          Todo
        </Link>
        <Link to="/starwars" role="menuitem">
          Star Wars GraphQL
        </Link>
        <Link to="/gameoflife" role="menuitem">
          Conway&apos;s Game of Life
        </Link>
      </Submenu>
      <a href="https://vue.mattailes.net">VueJS Site</a>
    </StyledNav>
  )
}

export default Navigation
