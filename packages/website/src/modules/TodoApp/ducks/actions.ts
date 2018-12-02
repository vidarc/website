import shortid from 'shortid'

import {
  Action,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  Todo,
  TOGGLE_TODO,
  VisibilityFilter,
} from './types'

const addTodo = (text: string): Action<Todo> => ({
  type: ADD_TODO,
  payload: {
    text,
    id: shortid.generate(),
  },
})

const toggleTodo = (id: string): Action<Todo> => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
})

const setVisibilityFilter = ({
  filter,
}: VisibilityFilter): Action<VisibilityFilter> => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
})

export default { addTodo, toggleTodo, setVisibilityFilter }
