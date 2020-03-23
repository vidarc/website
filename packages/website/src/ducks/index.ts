import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import todoReducers from '../modules/todoApp/ducks'
import { reducers as gameOfLife, watchStart } from '../modules/gameOfLife/ducks'

import initialState from './initialState'

const rootReducer = combineReducers({ todoReducers, gameOfLife })

export const sagaMiddleware = createSagaMiddleware()

export function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
}

export function* rootSaga() {
  yield all([watchStart()])
}
