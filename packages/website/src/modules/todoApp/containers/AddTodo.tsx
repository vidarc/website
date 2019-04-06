import React, { useState } from 'react'

import { connect } from 'react-redux'

import actions from '../ducks/actions'

interface Props {
  dispatch: (string) => void
}

const AddTodo: React.FunctionComponent<Props> = ({ dispatch }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement> | MouseEvent) => {
    event.preventDefault()

    if (todo) dispatch(actions.addTodo(todo))

    setTodo('')
  }

  const handleChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => setTodo(value)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='todo'>
            Todo:
            <input placeholder='Enter the todo...' type='text' name='todo' value={todo} onChange={handleChange} />
          </label>
          <ma-button type='submit' onClick={handleSubmit}>
            Add Todo
          </ma-button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
