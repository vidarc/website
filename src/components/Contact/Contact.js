import React, { Component } from 'react'
import { Form, Header, Icon, Segment } from 'semantic-ui-react'
import Recaptcha from 'react-grecaptcha'

export default class Contact extends Component {

  state = {
    fname: '',
    lname: '',
    email: '',
    message: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  expiredCallback = () => {
    window.grecaptcha.reset()
  }

  verifyCallback = (response) => {
    console.log(response)
  }

  render() {
    return (
      <Segment stacked>
        <Header as='h3' icon textAlign='center'>
          <Icon name='mail outline' circular />
          <Header.Content>
            Send Me a Message
          </Header.Content>
        </Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='First Name' name='fname' value={this.state.fname} placeholder='First Name' onChange={this._handleChange} />
            <Form.Input label='Last Name' name='lname' value={this.state.lname} placeholder='Last Name' onChange={this._handleChange} />
          </Form.Group>
          <Form.Input type='email' label='E-Mail Address' name='email' value={this.state.email} placeholder='E-Mail Address' onChange={this._handleChange} />
          <Form.TextArea label='Message' name='message' value={this.state.message} placeholder='Message' onChange={this._handleChange} />
          <Form.Group>
            <Recaptcha
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
              callback={this.verifyCallback}
              expiredCallback={this.expiredCallback}
              locale="en-US"
            />
          </Form.Group>
          <Form.Button primary type='submit' content='Send Message' />
        </Form>
      </Segment>
    )
  }
}
