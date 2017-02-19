import { combineReducers } from 'redux'
import BlogReducer from './reducer_blog'

const rootReducer = combineReducers({
  blog: BlogReducer
})

export default rootReducer
