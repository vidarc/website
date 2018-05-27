// @flow

import shortid from 'shortid'

import types from './types'

const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  payload: {
    id: shortid.generate(),
    text,
  },
})

const toggleTodo = (id: string) => ({
  type: types.TOGGLE_TODO,
  payload: {
    id,
  },
})

const setVisibilityFilter = (filter: string) => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
})

export default { addTodo, toggleTodo, setVisibilityFilter }
