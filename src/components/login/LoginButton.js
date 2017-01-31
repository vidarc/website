import React from 'react'
import { Link } from 'react-router'
import {
  Button,
  Icon
} from 'semantic-ui-react'

const LoginButton = (props) => {

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

export default LoginButton
