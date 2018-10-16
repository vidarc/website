// @flow

import * as React from 'react'
import { Link } from '@reach/router'
import { css } from 'emotion'

import avatar from '../../images/avatar.png'

type State = {
  showSubmenu: boolean
}

const menu = css`
  display: flex;
  height: 50px;
  width: 100%;
  border-top: 8px solid #000000;
  border-bottom: 3px solid #000000;
  padding-left: 10px;
  padding-right: 10px;

  > div,
  > a,
  > img {
    align-self: center;
    margin-right: 20px;
  }

  > div:last-child {
    margin-right: 0px;
  }
`

const submenu = css`
  cursor: pointer;
  display: inline-block;
  position: relative;

  hr {
    margin: 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  > p {
    margin: 10px 0px;
  }

  > div {
    position: absolute;
    min-width: 150px;
    background-color: #eeeeee;
    border-top: 3px solid #000000;
    border-bottom: 3px solid #000000;

    > a {
      display: block;
      padding: 5px;
    }
  }
`

const avatarStyle = css`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

export default class Navigation extends React.Component<null, State> {
  state = {
    showSubmenu: false,
  }

  handleSubmenuClick = (showSubmenu: boolean) => this.setState({ showSubmenu })

  handleSubmenuHover = (hover: boolean) => this.setState({ showSubmenu: hover })

  render() {
    const { showSubmenu } = this.state

    const style = {
      display: showSubmenu ? 'block' : 'none',
    }

    return (
      <nav className={menu}>
        <img src={avatar} className={avatarStyle} alt='avatar' />
        <Link to='/'>Home</Link>
        <div
          role='menu'
          tabIndex='0'
          className={submenu}
          onClick={() => this.handleSubmenuClick(!showSubmenu)}
          onKeyPress={() => this.handleSubmenuClick(!showSubmenu)}
          onMouseEnter={() => this.handleSubmenuHover(true)}
          onMouseLeave={() => this.handleSubmenuHover(false)}
        >
          <p>Projects</p>
          <div style={style}>
            <Link to='/todo'>Todo</Link>
            <hr />
            <Link to='/starwars'>Star Wars GraphQL</Link>
          </div>
        </div>
      </nav>
    )
  }
}
