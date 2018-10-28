// @flow

import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ACTIVE,
  SHOW_ALL,
  TOGGLE_TODO,
} from '../types'
import type { State, Todo, VisibilityFilter } from '../types'

import todosReducer from '../reducers'

describe('reducers test', () => {
  describe('todos reducer', () => {
    it('should return an initial state of an empty array', () => {
      const expected = { todos: [], visibilityFilter: { filter: SHOW_ALL } }

      // $FlowIgnore
      expect(
        todosReducer(undefined, { type: undefined, payload: undefined }),
      ).toEqual(expected)
    })

    it('should add a todo', () => {
      const todoOne: Todo = {
        id: 'shortid00',
        text: 'testing todos',
        completed: false,
      }
      const todoTwo: Todo = {
        id: 'shortid01',
        text: 'testing todos again',
        completed: false,
      }

      const expected: State = {
        todos: [],
        visibilityFilter: { filter: SHOW_ALL },
      }

      expect(todosReducer({}, { type: ADD_TODO, payload: todoOne })).toEqual({
        ...expected,
        ...{ todos: [todoOne] },
      })
      expect(
        todosReducer({ todos: [todoOne] }, { type: ADD_TODO, payload: todoTwo }),
      ).toEqual({ ...expected, ...{ todos: [todoOne, todoTwo] } })
    })

    it('should toggle a todo', () => {
      const todo: Todo = {
        id: 'shortid',
        text: 'testing todos',
        completed: false,
      }
      const toggledTodo: Todo = {
        id: 'shortid',
        text: 'testing todos',
        completed: true,
      }

      const expected: State = {
        todos: [toggledTodo],
        visibilityFilter: { filter: SHOW_ALL },
      }

      expect(
        todosReducer({ todos: [todo] }, { type: TOGGLE_TODO, payload: todo }),
      ).toEqual(expected)
    })
  })

  describe('visibilityFilter reducer', () => {
    it('should default to SHOW_ALL', () => {
      const expected: State = {
        todos: [],
        visibilityFilter: { filter: SHOW_ALL },
      }

      // $FlowIgnore
      expect(
        todosReducer(undefined, { type: undefined, payload: undefined }),
      ).toEqual(expected)
    })

    it('should return a filter when SET_VISIBILITY_FILTER', () => {
      const expected: State = {
        todos: [],
        visibilityFilter: { filter: SHOW_ACTIVE },
      }

      const visibilityFilter: VisibilityFilter = { filter: SHOW_ALL }

      expect(
        todosReducer(
          { visibilityFilter },
          {
            type: SET_VISIBILITY_FILTER,
            payload: { filter: SHOW_ACTIVE },
          },
        ),
      ).toEqual(expected)
    })
  })
})
