import { combineReducers } from 'redux'

import { Action, Todo, Todos, types, VisibilityFilter } from './types'

const todos = (state: Todos = [], { type, payload }: Action<Todo>): Todos => {
  switch (type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ]
    case types.TOGGLE_TODO:
      return state.map((todo: Todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

const initialFilter: VisibilityFilter = {
  filter: types.SHOW_ALL,
}

const visibilityFilter = (
  state: VisibilityFilter = initialFilter,
  { type, payload }: Action<VisibilityFilter>
): VisibilityFilter => {
  switch (type) {
    case types.SET_VISIBILITY_FILTER:
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
