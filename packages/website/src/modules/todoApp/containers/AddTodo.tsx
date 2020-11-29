import { useState, SyntheticEvent } from 'react'

import { connect } from 'react-redux'

import actions from '../ducks/actions'

// eslint-disable-next-line react/prop-types
const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement> | MouseEvent) => {
    event.preventDefault()

    if (todo) dispatch(actions.addTodo(todo))

    setTodo('')
  }

  const handleChange = ({ currentTarget: { value } }: SyntheticEvent<HTMLInputElement>) =>
    setTodo(value)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">
            Todo:
            <input
              placeholder="Enter the todo..."
              type="text"
              name="todo"
              value={todo}
              onChange={handleChange}
            />
          </label>
          <ma-button type="submit" onClick={handleSubmit}>
            Add Todo
          </ma-button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
