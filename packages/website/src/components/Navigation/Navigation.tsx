import * as React from 'react'

import styled from '@emotion/styled'
import { Link } from '@reach/router'

import avatar from '../../images/avatar-small.png'

import { StyledNav, StyledSubmenu, SubmenuItems } from './StyledComponents'

interface State {
  showSubmenu: boolean
}

const AvatarImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

export default class Navigation extends React.Component<{}, State> {
  state = {
    showSubmenu: false,
  }

  handleSubmenuClick = () =>
    this.setState({ showSubmenu: !this.state.showSubmenu })

  handleSubmenuHover = (event: React.SyntheticEvent) => {
    // TODO - do something here
  }

  render() {
    const { showSubmenu } = this.state

    return (
      <StyledNav>
        <AvatarImg src={avatar} alt='avatar' />
        <Link to='/'>Home</Link>
        <StyledSubmenu
          role='menu'
          tabIndex={0}
          onClick={this.handleSubmenuClick}
          onKeyPress={this.handleSubmenuClick}
          onMouseEnter={this.handleSubmenuHover}
          onMouseLeave={this.handleSubmenuHover}
        >
          <p>Projects</p>
          <SubmenuItems show={showSubmenu}>
            <Link to='/todo'>Todo</Link>
            <hr />
            <Link to='/starwars'>Star Wars GraphQL</Link>
          </SubmenuItems>
        </StyledSubmenu>
      </StyledNav>
    )
  }
}
