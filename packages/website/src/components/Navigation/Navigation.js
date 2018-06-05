// @flow

import * as React from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

import avatar from '../../images/avatar.png'

const container = css`
  display: flex;
  height: 50px;
  width: 100%;
  border-top: 8px solid #000000;
  border-bottom: 3px solid #000000;
  padding-left: 10px;
  padding-right: 10px;

  > * {
    align-self: center;
  }

  & ul {
    list-style-type: none;
    display: flex;

    & li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0px;
      }
    }
  }
`

const avatarStyle = css`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

const Navigation = () => (
  <div className={container}>
    <img src={avatar} className={avatarStyle} alt='avatar' />
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/todo'>Todo</Link>
      </li>
      <li>
        <Link to='/starwars'>Star Wars GraphQL</Link>
      </li>
    </ul>
  </div>
)

export default Navigation
