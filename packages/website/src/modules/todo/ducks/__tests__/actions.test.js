// @flow

import actions from '../actions'
import type { Action, Todo, VisibilityFilter } from '../types'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'some text'

    const expected: Action<Todo> = {
      type: 'ADD_TODO',
      payload: {
        id: 'shortid',
        text,
      },
    }

    expect(actions.addTodo(text)).toEqual(expected)
  })

  it('should create an action to toggle a todo', () => {
    const expected: Action<Todo> = {
      type: 'TOGGLE_TODO',
      payload: {
        id: 'shortid',
      },
    }

    expect(actions.toggleTodo('shortid')).toEqual(expected)
  })

  describe('set visibility filter', () => {
    it('should set the filter to show all', () => {
      const expected: Action<VisibilityFilter> = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter: 'SHOW_ALL',
        },
      }

      const filter: VisibilityFilter = { filter: 'SHOW_ALL' }

      expect(actions.setVisibilityFilter(filter)).toEqual(expected)
    })

    it('should set the filter to show active', () => {
      const expected: Action<VisibilityFilter> = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter: 'SHOW_ACTIVE',
        },
      }

      const filter: VisibilityFilter = { filter: 'SHOW_ACTIVE' }

      expect(actions.setVisibilityFilter(filter)).toEqual(expected)
    })

    it('should set the filter to show completed', () => {
      const expected: Action<VisibilityFilter> = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter: 'SHOW_COMPLETED',
        },
      }

      const filter: VisibilityFilter = { filter: 'SHOW_COMPLETED' }

      expect(actions.setVisibilityFilter(filter)).toEqual(expected)
    })
  })
})
