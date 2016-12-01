import React, { Component } from 'react'
import {
  Container
} from 'semantic-ui-react'
import Navbar from '../navbar/Navbar'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return <Container>
      <Navbar />
      {this.props.children}
    </Container>
  }
}
