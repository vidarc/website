import React, { useEffect, useRef, useState } from 'react'

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
  const submenu = useRef(null)
  const [showSubmenu, setSubmenu] = useState(false)

  useEffect(() => {
    function handleSubmenuClose({ type, target, key }: KeyboardEvent) {
      switch (type) {
        case 'mousedown': {
          if (submenu.current.contains(target)) return
          setSubmenu(false)
          break
        }
        case 'keydown': {
          if (key === 'Escape') {
            setSubmenu(false)
            break
          }
        }
      }
    }

    document.addEventListener('mousedown', handleSubmenuClose, false)
    document.addEventListener('keydown', handleSubmenuClose, false)

    return function cleanup() {
      document.removeEventListener('mousedown', handleSubmenuClose, false)
      document.removeEventListener('keydown', handleSubmenuClose, false)
    }
  })

  const handleSubmenuClick = () => {
    setSubmenu(!showSubmenu)
  }

  return (
    <StyledNav>
      <AvatarImg src={avatar} alt='avatar' />
      <Link to='/'>Home</Link>
      <StyledSubmenu
        ref={submenu}
        role='menu'
        tabIndex={0}
        onClick={handleSubmenuClick}
        onKeyPress={handleSubmenuClick}
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
