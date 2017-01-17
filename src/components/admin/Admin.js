import React, { Component } from 'react'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment'

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
