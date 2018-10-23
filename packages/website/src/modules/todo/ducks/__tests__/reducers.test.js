// @flow

import types, { type Todo } from '../types'

import { todos, visibilityFilter } from '../reducers'

describe('reducers test', () => {
  describe('todos reducer', () => {
    it('should return an initial state of an empty array', () => {
      const expected = []

      // $FlowIgnore
      expect(todos(undefined, { type: undefined, payload: undefined })).toEqual(
        expected,
      )
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

      expect(todos([], { type: types.ADD_TODO, payload: todoOne })).toEqual([
        todoOne,
      ])
      expect(
        todos([todoOne], { type: types.ADD_TODO, payload: todoTwo }),
      ).toEqual([todoOne, todoTwo])
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

      expect(todos([todo], { type: types.TOGGLE_TODO, payload: todo })).toEqual(
        [toggledTodo],
      )
    })
  })

  describe('visibilityFilter reducer', () => {
    it('should default to SHOW_ALL', () => {
      const expected = { filter: 'SHOW_ALL' }

      // $FlowIgnore
      expect(
        visibilityFilter(undefined, { type: undefined, payload: undefined }),
      ).toEqual(expected)
    })

    it('should return a filter when SET_VISIBILITY_FILTER', () => {
      const expected = { filter: 'SHOW_ACTIVE' }

      expect(
        visibilityFilter(
          { filter: 'SHOW_ALL' },
          {
            type: types.SET_VISIBILITY_FILTER,
            payload: { filter: 'SHOW_ACTIVE' },
          },
        ),
      ).toEqual(expected)
    })
  })
})
