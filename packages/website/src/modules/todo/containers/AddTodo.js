// @flow

import React from 'react'
import { connect } from 'react-redux'

import actions from '../ducks/actions'

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
    this.props.dispatch(actions.addTodo(this.state.todo))
    this.setState({ todo: '' })
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  render() {
    const { todo } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input placeholder='Enter the todo...' name='todo' value={todo} onChange={this.handleChange} />
            <button type='submit' content='Add Todo' />
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
