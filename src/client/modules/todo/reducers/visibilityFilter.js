// @flow

import { type Action, type VisibilityFilter } from '../constants'

type State = VisibilityFilter

const initialState: State = {
  filter: 'SHOW_ALL',
}

const visibilityFilter = (
  state: State = initialState,
  { type, payload }: Action<VisibilityFilter>,
): $PropertyType<State, 'filter'> => {
  switch (type) {
    case 'SET_VISIBILITY_FILTER':
      return payload.filter
    default:
      return state.filter
  }
}
export default visibilityFilter
