import shortid from 'shortid'

import { Action, Todo, types, VisibilityFilter } from './types'

const addTodo = (text: string): Action<Todo> => ({
  type: types.ADD_TODO,
  payload: {
    text,
    id: shortid.generate(),
  },
})

const toggleTodo = (id: string): Action<Todo> => ({
  type: types.TOGGLE_TODO,
  payload: {
    id,
  },
})

const setVisibilityFilter = ({
  filter,
}: VisibilityFilter): Action<VisibilityFilter> => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
})

export default { addTodo, toggleTodo, setVisibilityFilter }
