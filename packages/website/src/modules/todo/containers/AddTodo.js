// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@mattailes/common/components'

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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(actions.addTodo(this.state.todo))
    this.setState({ todo: '' })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Todo:
              <input
                placeholder='Enter the todo...'
                type='text'
                name='todo'
                value={this.state.todo}
                onChange={this.handleChange}
              />
            </label>
            <Button text='Add Todo' type='submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
