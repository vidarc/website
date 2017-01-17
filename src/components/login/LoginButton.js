import React, { Component } from 'react'
import Link from 'react-router/lib/Link'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'

export default class LoginButton extends Component {

  render() {
    if (this.props.auth.isLoggedin())
      return (
        <Button primary as={Link} to='/'>
          <Icon name='sign out' />Logout
        </Button>
      )
    else
      return (
        <Button primary as={Link} to='/login'>
          <Icon name='sign in' />Login
        </Button>
      )
  }
}
