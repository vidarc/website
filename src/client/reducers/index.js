// @flow

import { combineReducers } from 'redux'
import todoReducers from '../modules/Todo/reducers'

const rootReducer = combineReducers({ todoReducers })

export default rootReducer
