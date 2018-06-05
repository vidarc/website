// @flow

import * as React from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

import avatar from '../../images/avatar.png'

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
  display: inline-block;
  position: relative;

  hr {
    margin: 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  > p {
    margin: 10px 0px;
  }

  > div {
    display: none;
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

  :hover div {
    display: block;
  }
`

const avatarStyle = css`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

type State = {
  width: number,
}

export default class Navigation extends React.Component<null, State> {
  constructor() {
    super()

    this.state = {
      width: 0,
    }
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener('resize', () => this._setWindowWidth(window.innerWidth))
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  _setWindowWidth = (width: number) => this.setState({ width })

  render() {
    return (
      <nav className={menu}>
        <img src={avatar} className={avatarStyle} alt='avatar' />
        <Link to='/'>Home</Link>
        <div className={submenu}>
          <p>Projects</p>
          <div>
            <Link to='/todo'>Todo</Link>
            <hr />
            <Link to='/starwars'>Star Wars GraphQL</Link>
          </div>
        </div>
      </nav>
    )
  }
}
