import { combineReducers } from 'redux'
import randomArtCollection from './artReducer'

const rootReducer = combineReducers({
  randomArtCollection,
})

export default rootReducer
