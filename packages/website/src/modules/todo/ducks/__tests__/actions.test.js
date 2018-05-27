// @flow

import actions from '../actions'
import types, { visibilityFilter } from '../types'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'some text'

    const expected = {
      type: types.ADD_TODO,
      payload: {
        id: 'shortid',
        text,
      },
    }

    expect(actions.addTodo(text)).toEqual(expected)
  })

  it('should create an action to toggle a todo', () => {
    const expected = {
      type: types.TOGGLE_TODO,
      payload: {
        id: 'shortid',
      },
    }

    expect(actions.toggleTodo('shortid')).toEqual(expected)
  })

  describe('set visibility filter', () => {
    it('should set the filter to show all', () => {
      const expected = {
        type: types.SET_VISIBILITY_FILTER,
        payload: {
          filter: visibilityFilter.SHOW_ALL,
        },
      }

      expect(actions.setVisibilityFilter(visibilityFilter.SHOW_ALL)).toEqual(expected)
    })

    it('should set the filter to show active', () => {
      const expected = {
        type: types.SET_VISIBILITY_FILTER,
        payload: {
          filter: visibilityFilter.SHOW_ACTIVE,
        },
      }

      expect(actions.setVisibilityFilter(visibilityFilter.SHOW_ACTIVE)).toEqual(expected)
    })

    it('should set the filter to show completed', () => {
      const expected = {
        type: types.SET_VISIBILITY_FILTER,
        payload: {
          filter: visibilityFilter.SHOW_COMPLETED,
        },
      }

      expect(actions.setVisibilityFilter(visibilityFilter.SHOW_COMPLETED)).toEqual(expected)
    })
  })
})
