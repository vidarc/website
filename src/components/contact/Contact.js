import React, { Component } from 'react'
import {
  Segment,
  TextArea
} from 'semantic-ui-react'
import Markdown from 'markdown-it'

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }

    this.onChange = this.onChange.bind(this)
    this.md = new Markdown({
      html: true,
      linkify: true,
      typographer: true
    })
  }

  onChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return(
      <Segment piled>
        <TextArea rows='10' name='text' value={this.state.content} onChange={this.onChange} />
        <p dangerouslySetInnerHTML={{__html: this.md.render(this.state.content)}} />
      </Segment>
    )
  }
}
