import React, { Component } from 'react'
import { Button, Divider, Grid, Icon, Segment } from 'semantic-ui-react'
import { LoginForm, SignupForm } from './'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: 'login',
    }

    this.changeForm = this.changeForm.bind(this)
  }

  changeForm(event) {
    this.setState({
      form: event.target.name,
    })
  }

  render() {
    return (
      <Grid className='fillUpScreen' doubling centered>
        <Grid.Column verticalAlign='middle' computer={8} tablet={10} mobile={14}>
          <Grid.Row>
            <Segment raised>
              <Button.Group size='large'>
                <Button primary name='login' onClick={this.changeForm}>
                  <Icon name='sign in' />Login
                </Button>
                <Button.Or />
                <Button secondary name='signup' onClick={this.changeForm}>
                  <Icon name='add user' />Sign Up
                </Button>
              </Button.Group>
              <Divider horizontal>
                <Icon name='user' />
              </Divider>
              {this.state.form === 'login' ? <LoginForm /> : <SignupForm />}
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}
