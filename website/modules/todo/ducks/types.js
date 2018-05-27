// @flow

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const visibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

export type Action<T> = {
  type: string,
  payload: T,
}

export type Todo = {
  id: string,
  text: string,
  completed: boolean,
}

export type VisibilityFilter = {
  filter: string,
}

export default {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
}
