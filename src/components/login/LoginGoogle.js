import React, { Component } from 'react'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'

export default class LoginGoogle extends Component {

  constructor(props) {
    super(props)

    this.googleLogin = this.googleLogin.bind(this)
  }

  googleLogin() {
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
