import { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'

export enum types {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface Todo {
  id?: string
  text?: string
  completed?: boolean
}

export type Todos = Todo[]

export interface VisibilityFilter {
  filter: types.SHOW_ALL | types.SHOW_ACTIVE | types.SHOW_COMPLETED
}

export interface State {
  todos: Todos
  visibilityFilter: VisibilityFilter
}

export interface Action<T> {
  type: types.ADD_TODO | types.TOGGLE_TODO | types.SET_VISIBILITY_FILTER
  payload: T
}

export type Store = ReduxStore<State, Action<any>>

export type Dispatch = ReduxDispatch<Action<any>>
