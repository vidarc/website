import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class LoginGoogle extends Component {

  googleLogin = () => {
    console.log('wip')
  }

  render() {
    return (
      <Button color='google plus' onClick={this.googleLogin}>
        <Icon name='google' />Google
      </Button>
    )
  }
}
