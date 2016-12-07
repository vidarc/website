import React, { Component } from 'react'
import {
  Button,
  Form
} from 'semantic-ui-react'

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
    event.preventDefault()

    this.props.auth.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }, function(err) {
      if (err) alert("something went wrong: " + err.message)
    })
  }

  render() {
    return(
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
    )
  }
}
