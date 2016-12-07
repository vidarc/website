import React, { Component } from 'react'
import {
  Button,
  Divider,
  Grid,
  Icon,
  Segment
} from 'semantic-ui-react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default class Login extends Component {

  constructor(props) {
    super()
    this.state = {
      form: 'login'
    }

    this.changeForm = this.changeForm.bind(this)
  }

  changeForm(event) {
    this.setState({
      form: event.target.name
    })
  }

  render() {
    return(
      <Grid doubling centered>
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
              {this.state.form === 'login' ? <LoginForm auth={this.props.auth} /> : <SignupForm auth={this.props.auth} />}
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}
