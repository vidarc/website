import * as React from 'react'

import { Button } from '@mattailes/ui'
import { connect } from 'react-redux'

import actions from '../ducks/actions'

interface Props {
  dispatch: (string) => void
}

interface State {
  todo: string
}

class AddTodo extends React.Component<Props, State> {
  state = {
    todo: '',
  }

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { todo } = this.state
    const { dispatch } = this.props

    dispatch(actions.addTodo(todo))

    this.setState({ todo: '' })
  }

  handleChange = ({
    currentTarget: { name, value },
  }: React.SyntheticEvent<HTMLInputElement>) =>
    this.setState({ [name as keyof State]: value })

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