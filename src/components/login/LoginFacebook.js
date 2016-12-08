import React, { Component } from 'react'
import {
  Button,
  Icon
} from 'semantic-ui-react'

export default class LoginFacebook extends Component {

  constructor(props) {
    super(props)

    this.facebookLogin = this.facebookLogin.bind(this)
  }

  facebookLogin() {
    this.props.auth.login({
      connection: 'facebook'
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  }

  render() {
    return(
      <Button color='facebook' onClick={this.facebookLogin}>
        <Icon name='facebook' />Facebook
      </Button>
    )
  }
}
