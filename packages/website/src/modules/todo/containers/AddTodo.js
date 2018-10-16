// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@mattailes/ui'

import actions from '../ducks/actions'

type Props = {
  dispatch: Function
}

type State = {
  todo: string
}

class AddTodo extends React.Component<Props, State> {
  state = {
    todo: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { todo } = this.state
    const { dispatch } = this.props

    dispatch(actions.addTodo(todo))

    this.setState({ todo: '' })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  render() {
    const { todo } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='todo'>
              Todo:
              <input
                placeholder='Enter the todo...'
                type='text'
                name='todo'
                value={todo}
                onChange={this.handleChange}
              />
            </label>
            <Button type='submit'>Add Todo</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
