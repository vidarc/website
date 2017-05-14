// @flow

import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class Admin extends Component {

  state = {
    content: '',
  }

  render() {
    return (
      <Segment piled>
        {this.state.content}
      </Segment>
    )
  }
}
