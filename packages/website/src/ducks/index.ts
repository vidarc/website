import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import todoReducers from '../modules/TodoApp/ducks'
import gameOfLife from '../modules/GameOfLife/ducks'
import initialState from './initialState'

const rootReducer = combineReducers({ todoReducers, gameOfLife })

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
