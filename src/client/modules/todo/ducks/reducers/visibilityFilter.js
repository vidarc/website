// @flow

import types, { type Action, type VisibilityFilter } from '../types'

const initialState: VisibilityFilter = {
  filter: 'SHOW_ALL',
}

const visibilityFilter = (state: VisibilityFilter = initialState, { type, payload }: Action<VisibilityFilter>) => {
  switch (type) {
    case types.SET_VISIBILITY_FILTER:
      return payload
    default:
      return state
  }
}

export default visibilityFilter
