// @flow

import types, { type Action, type Todo } from '../types'

type State = Array<Todo>

const todos = (state: State = [], { type, payload }: Action<Todo>): State => {
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
      return state.map((todo: Todo) => (todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo))
    default:
      return state
  }
}

export default todos
