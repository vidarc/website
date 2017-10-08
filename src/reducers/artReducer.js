import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function artReducer(state = initialState.randomArtCollection, action) {
  switch (action.type) {
    case types.LOAD_RANDOM_ART_SUCCESS:
      return action.randomArtCollection
    default:
      return state
  }
}
