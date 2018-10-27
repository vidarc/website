// @flow

import shortid from 'shortid'

import type { Action, Todo, VisibilityFilter } from './types'

const addTodo = (text: string): Action<Todo> => ({
  type: 'ADD_TODO',
  payload: {
    id: shortid.generate(),
    text,
  },
})

const toggleTodo = (id: string): Action<Todo> => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
})

const setVisibilityFilter = ({
  filter,
}: VisibilityFilter): Action<VisibilityFilter> => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter,
  },
})

export default { addTodo, toggleTodo, setVisibilityFilter }
