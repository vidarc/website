// @flow

import React, { Component } from 'react'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'

export default class SignupForm extends Component {

  constructor(props) {
    super()
    this.state = {
      form: 'login'
    }
  }

  componentDidMount() {
    window.grecaptcha.render('recaptcha', {
      sitekey: process.env.REACT_APP_RECAPTCHA_SITE,
      callback: this.verifyCallback
    })
  }

  verifyCallback(response) {}

  handleClick = (event, { formData }) => {
    event.preventDefault()

    let body = {
      secret: process.env.REACT_APP_RECAPTCHA_SECRET,
      response: formData['g-recaptcha-response']
    }

    fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post',
      body: body
    })
    .then(function(response) {
      console.log(response)
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleClick}>
        <Form.Field>
          <Form.Input icon='user' iconPosition='left' type='email' name='email' placeholder='Email Address...' />
        </Form.Field>
        <Form.Field>
          <Form.Input icon='user' iconPosition='left' type='text' name='username' placeholder='Username...' />
        </Form.Field>
        <Form.Field>
          <Form.Input icon='lock' iconPosition='left' type='password' name='password' placeholder='Password...' />
        </Form.Field>
        <Form.Field>
          <div id='recaptcha' />
        </Form.Field>
        <Form.Field>
          <Button fluid primary icon='checkmark box' />
        </Form.Field>
      </Form>
    )
  }
}
