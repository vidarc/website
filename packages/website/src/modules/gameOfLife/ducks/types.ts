import { Action as ReduxAction } from 'redux'

export const UPDATE_GAME = 'gameOfLife/UPDATE_GAME'
export const INCREMENT_GENERATION = 'gameOfLife/INCREMENT_GENERATION'
export const START_GAME_OF_LIFE = 'gameOfLife/START_GAME_OF_LIFE'
export const PAUSE_GAME_OF_LIFE = 'gameOfLife/PAUSE_GAME_OF_LIFE'

export interface Tile {
  id: number
  alive: boolean
}

export interface Action<T> extends ReduxAction {
  payload?: T
}
