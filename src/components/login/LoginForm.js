import React, { Component } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'
import { LoginFacebook, LoginGoogle } from './'

export default class LoginForm extends Component {

  constructor(props) {
    super()
    this.state = {
      form: 'login',
      email: '',
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
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
