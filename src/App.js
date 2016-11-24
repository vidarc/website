import React, { Component } from 'react';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Col
} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <Form horizontal>
            <FormGroup controlId="formInput">
              <Col componentClass={ControlLabel} sm={2}>
                Type Here:
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Type in me" onChange={this.handleChange} value={this.state.textBox} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle="success">
                  Click Me! I don't do anything though.
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <h2>{this.state.text}</h2>
        </div>
      </div>
    );
  }
}

export default App;
