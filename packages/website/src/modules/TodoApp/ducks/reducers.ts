import { combineReducers } from 'redux'

import {
  Action,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  Todo,
  Todos,
  TOGGLE_TODO,
  VisibilityFilter,
} from './types'

const todos = (state: Todos = [], { type, payload }: Action<Todo>): Todos => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ]
    case TOGGLE_TODO:
      return state.map((todo: Todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
      )
    default:
      return state
  }
}

const initialFilter = {
  filter: SHOW_ALL,
}

const visibilityFilter = (
  state: VisibilityFilter = initialFilter,
  { type, payload }: Action<VisibilityFilter>,
): VisibilityFilter => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return payload
    default:
      return state
  }
}

const todosReducer = combineReducers({
  todos,
  visibilityFilter,
})

export default todosReducer
