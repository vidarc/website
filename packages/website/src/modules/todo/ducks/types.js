// @flow

import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export type Todo = {
  id?: string,
  text?: string,
  completed?: boolean
}

export type Todos = Array<Todo>

export type VisibilityFilter = {
  filter: 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED'
}

export type State = {
  +todos: Todos,
  +visibilityFilter: VisibilityFilter
}

export type Action<T> = {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'SET_VISIBILITY_FILTER',
  payload: T
}

export type Store = ReduxStore<State, Action<>>

export type Dispatch = ReduxDispatch<Action<>>
