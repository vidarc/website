import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class LoginFacebook extends Component {
  facebookLogin = () => {
    console.log('wip')
  }

  render() {
    return (
      <Button color="facebook" onClick={this.facebookLogin}>
        <Icon name="facebook" />Facebook
      </Button>
    )
  }
}
