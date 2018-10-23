// @flow

import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import todoReducers from '../modules/todo/ducks'

const rootReducer = combineReducers({ todoReducers })

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}
