// @flow

import todos from '../reducers/todos'
import visibilityFilter from '../reducers/visibilityFilter'

describe('reducers test', () => {
  describe('todos reducer', () => {
    it('should return an initial state of an empty array', () => {
      const expected = []

      // $FlowIgnore
      expect(todos(undefined, { type: undefined, payload: undefined })).toEqual(expected)
    })

    it('should add a todo', () => {
      const todoOne = { id: 0, text: 'testing todos', completed: false }
      const todoTwo = { id: 1, text: 'testing todos again', completed: false }

      expect(todos([], { type: 'ADD_TODO', payload: todoOne })).toEqual([todoOne])
      expect(todos([todoOne], { type: 'ADD_TODO', payload: todoTwo })).toEqual([todoOne, todoTwo])
    })

    it('should toggle a todo', () => {
      const todo = { id: 0, text: 'testing todos', completed: false }
      const toggledTodo = { id: 0, text: 'testing todos', completed: true }

      expect(todos([todo], { type: 'TOGGLE_TODO', payload: todo })).toEqual([toggledTodo])
    })
  })

  describe('visibilityFilter reducer', () => {
    it('should default to SHOW_ALL', () => {
      const expected = 'SHOW_ALL'

      // $FlowIgnore
      expect(visibilityFilter(undefined, { type: undefined, payload: undefined })).toEqual(expected)
    })

    it('should return a filter when SET_VISIBILITY_FILTER', () => {
      const expected = 'SHOW_ACTIVE'

      expect(
        visibilityFilter({ filter: 'SHOW_ALL' }, { type: 'SET_VISIBILITY_FILTER', payload: { filter: 'SHOW_ACTIVE' } }),
      ).toEqual(expected)
    })
  })
})
