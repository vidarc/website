import React, { Component } from 'react'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'

export default class LoginFacebook extends Component {

  constructor(props) {
    super(props)

    this.facebookLogin = this.facebookLogin.bind(this)
  }

  facebookLogin() {
    console.log('wip')
  }

  render() {
    return(
      <Button color='facebook' onClick={this.facebookLogin}>
        <Icon name='facebook' />Facebook
      </Button>
    )
  }
}
