import React, { Component } from 'react'
import { Form, Header, Icon, Segment } from 'semantic-ui-react'

export default class Contact extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  }

  componentDidMount() {
    window.grecaptcha.render('recaptcha', {
      sitekey: process.env.REACT_APP_RECAPTCHA_SITE,
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = event => {
    event.preventDefault()

    let payload = {
      response: window.grecaptcha.getResponse(),
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      message: this.state.message,
    }

    fetch('http://localhost:3000/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Segment stacked>
        <Header as="h3" icon textAlign="center">
          <Icon name="mail outline" circular />
          <Header.Content>Send Me a Message</Header.Content>
        </Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              name="first_name"
              value={this.state.first_name}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Last Name"
              name="last_name"
              value={this.state.last_name}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Input
            type="email"
            label="E-Mail Address"
            name="email"
            value={this.state.email}
            placeholder="E-Mail Address"
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Message"
            name="message"
            value={this.state.message}
            placeholder="Message"
            onChange={this.handleChange}
          />
          <Form.Group>
            <div id="recaptcha" />
          </Form.Group>
          <Form.Button primary type="submit" content="Send Message" onClick={this.onSubmit} />
        </Form>
      </Segment>
    )
  }
}
