import React, { Component } from 'react'
import {
  Input,
  Segment
} from 'semantic-ui-react'

export class Admin extends Component {

  state = {
    content: 'testing',
  }

  render() {
    return (
      <Segment piled>
        <Input type='text-area' value={this.state.content} />
      </Segment>
    )
  }
}
