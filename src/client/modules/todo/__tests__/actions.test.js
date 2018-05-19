// @flow

import * as actions from './../actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'some text'

    const expected = {
      type: 'ADD_TODO',
      payload: {
        id: 0,
        text,
      },
    }

    expect(actions.addTodo(text)).toEqual(expected)
  })

  it('should create an action to toggle a todo', () => {
    const expected = {
      type: 'TOGGLE_TODO',
      payload: {
        id: 0,
      },
    }

    expect(actions.toggleTodo(0)).toEqual(expected)
  })

  describe('set visibility filter', () => {
    it('should set the filter to show all', () => {
      const expected = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter: 'SHOW_ALL',
        },
      }

      expect(actions.setVisibilityFilter('SHOW_ALL')).toEqual(expected)
    })

    it('should set the filter to show active', () => {
      const expected = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter: 'SHOW_ACTIVE',
        },
      }

      expect(actions.setVisibilityFilter('SHOW_ACTIVE')).toEqual(expected)
    })

    it('should set the filter to show completed', () => {
      const expected = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter: 'SHOW_COMPLETED',
        },
      }

      expect(actions.setVisibilityFilter('SHOW_COMPLETED')).toEqual(expected)
    })
  })
})
