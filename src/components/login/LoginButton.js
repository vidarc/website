import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Button,
  Icon
} from 'semantic-ui-react'

export default class LoginButton extends Component {
  _isAdmin() {
    return true
  }

  render() {
    if (this._isAdmin())
      return(
        <Button primary as={Link} to='/'>
          <Icon name='sign out' />Logout
        </Button>
      )
    else
      return(
        <Button primary as={Link} to='/login'>
          <Icon name='sign in' />Login
        </Button>
      )
  }
}
