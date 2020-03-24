import { State, Todo, types, VisibilityFilter } from '../types'

import todosReducer from '../reducers'

describe('reducers test', () => {
  describe('todos reducer', () => {
    it('should return an initial state of an empty array', () => {
      const expected = {
        todos: [],
        visibilityFilter: { filter: types.SHOW_ALL },
      }

      expect(todosReducer(undefined, { type: undefined, payload: undefined })).toEqual(expected)
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
        visibilityFilter: { filter: types.SHOW_ALL },
      }

      expect(todosReducer({}, { type: types.ADD_TODO, payload: todoOne })).toEqual({
        ...expected,
        ...{ todos: [todoOne] },
      })
      expect(
        todosReducer({ todos: [todoOne] }, { type: types.ADD_TODO, payload: todoTwo })
      ).toEqual({
        ...expected,
        ...{ todos: [todoOne, todoTwo] },
      })
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
        visibilityFilter: { filter: types.SHOW_ALL },
      }

      expect(todosReducer({ todos: [todo] }, { type: types.TOGGLE_TODO, payload: todo })).toEqual(
        expected
      )
    })
  })

  describe('visibilityFilter reducer', () => {
    it('should default to SHOW_ALL', () => {
      const expected: State = {
        todos: [],
        visibilityFilter: { filter: types.SHOW_ALL },
      }

      // $FlowIgnore
      expect(todosReducer(undefined, { type: undefined, payload: undefined })).toEqual(expected)
    })

    it('should return a filter when SET_VISIBILITY_FILTER', () => {
      const expected: State = {
        todos: [],
        visibilityFilter: { filter: types.SHOW_ACTIVE },
      }

      const visibilityFilter: VisibilityFilter = { filter: types.SHOW_ALL }

      expect(
        todosReducer(
          { visibilityFilter },
          {
            type: types.SET_VISIBILITY_FILTER,
            payload: { filter: types.SHOW_ACTIVE },
          }
        )
      ).toEqual(expected)
    })
  })
})
