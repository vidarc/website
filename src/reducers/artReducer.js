import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function artReducer(state = initialState.randomArt, action) {
  switch (action.type) {
    case types.REQUEST_RANDOM_ART:
      return Object.assign({}, state, {
        randomArt: {
          isLoading: true,
        },
      })
    case types.LOAD_RANDOM_ART:
      return Object.assign({}, state, {
        randomArt: {
          isLoading: false,
          collection: action.collection,
        },
      })
    default:
      return state
  }
}
