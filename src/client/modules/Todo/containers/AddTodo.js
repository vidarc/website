// @flow

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: '',
    }
  }

  handleSubmit = () => {
    this.props.dispatch(addTodo(this.state.todo))
    this.setState({ todo: '' })
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  render() {
    const { todo } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder="Enter the todo..." name="todo" value={todo} onChange={this.handleChange} />
            <Form.Button type="submit" content="Add Todo" />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
