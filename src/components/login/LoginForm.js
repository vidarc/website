import React, { Component } from 'react'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider'
import LoginFacebook from './LoginFacebook'
import LoginGoogle from './LoginGoogle'

export default class LoginForm extends Component {

  constructor(props) {
    super()
    this.state = {
      form: 'login',
      email: '',
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event) {
    console.log('wip')
  }

  render() {
    return (
      <div>
        <Divider horizontal>
          Login With
        </Divider>
        <LoginFacebook />
        <LoginGoogle />
        <Divider horizontal>
          Or
        </Divider>
        <Form>
          <Form.Field>
            <Form.Input icon='user' iconPosition='left' type='email' name='email' placeholder='Email Address...' value={this.state.email} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input icon='lock' iconPosition='left' type='password' name='password' placeholder='Password...' value={this.state.password} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Button fluid primary icon='checkmark box' onClick={this.handleClick} />
          </Form.Field>
        </Form>
      </div>
    )
  }
}
