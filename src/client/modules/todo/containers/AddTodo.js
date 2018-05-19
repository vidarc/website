// @flow

import * as React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

type Props = {
  dispatch: Function,
}

type State = {
  todo: string,
}

class AddTodo extends React.Component<Props, State> {
  state = {
    todo: '',
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
            <Form.Input placeholder='Enter the todo...' name='todo' value={todo} onChange={this.handleChange} />
            <Form.Button type='submit' content='Add Todo' />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default connect()(AddTodo)
