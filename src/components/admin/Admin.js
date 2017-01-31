import React, { Component } from 'react'
import {
  Input,
  Segment
} from 'semantic-ui-react'

export default class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <Segment piled>
        <Input type='text-area' />
      </Segment>
    )
  }
}
