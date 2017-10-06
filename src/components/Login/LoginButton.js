import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const LoginButton = () => (
  <Button primary as={Link} to='/login'>
    <Icon name='sign in' />Login
  </Button>
)

export default LoginButton
