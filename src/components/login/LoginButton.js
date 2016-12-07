import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Button,
  Icon
} from 'semantic-ui-react'

export default class LoginButton extends Component {
  render() {
    if (this.props.auth.loggedIn())
      return(
        <Button primary onClick={this.props.auth.logout.bind(this)} as={Link} to='/'>
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
