import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'semantic-ui-react'

export default class Login extends Component {
  render() {
    if (this.props.auth.loggedIn())
      return <Button primary onClick={this.props.auth.logout.bind(this)} as={Link} to='/'>Logout</Button>
    else
      return <Button primary onClick={this.props.auth.login.bind(this)}>Login</Button>
  }
}
