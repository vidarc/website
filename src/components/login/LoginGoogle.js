import React, { Component } from 'react'
import {
  Button,
  Icon
} from 'semantic-ui-react'

export default class LoginGoogle extends Component {

  constructor(props) {
    super(props)

    this.googleLogin = this.googleLogin.bind(this)
  }

  googleLogin() {
    this.props.auth.login({
      connection: 'google-oauth2'
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  }

  render() {
    return(
      <Button color='google plus' onClick={this.googleLogin}>
        <Icon name='google' />Google
      </Button>
    )
  }
}
