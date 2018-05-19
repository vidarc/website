// @flow

import { type VisibilityFilter } from '../constants'

let nextTodoId = 0
export const addTodo = (text: string) => {
  const id: number = nextTodoId
  nextTodoId += 1

  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
    },
  }
}

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
})

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter,
  },
})
