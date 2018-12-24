import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import todoReducers from '../modules/TodoApp/ducks'
import * as gameOfLife from '../modules/GameOfLife/ducks'

import initialState from './initialState'

const rootReducer = combineReducers({ todoReducers, gameOfLife: gameOfLife.reducers })

export const sagaMiddleware = createSagaMiddleware()

export function configureStore() {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
}

const { watchStart } = gameOfLife
export function* rootSaga() {
  yield all([watchStart()])
}
