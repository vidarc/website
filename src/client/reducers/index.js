// @flow

import { combineReducers } from 'redux'
import todoReducers from '../modules/todo/reducers'

const rootReducer = combineReducers({ todoReducers })

export default rootReducer
