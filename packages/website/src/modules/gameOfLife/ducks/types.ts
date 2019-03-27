import { Action as ReduxAction } from 'redux'

export const UPDATE_GAME = 'gameOfLife/UPDATE_GAME'
export const INCREMENT_GENERATION = 'gameOfLife/INCREMENT_GENERATION'
export const START_GAME_OF_LIFE = 'gameOfLife/START_GAME_OF_LIFE'
export const PAUSE_GAME_OF_LIFE = 'gameOfLife/PAUSE_GAME_OF_LIFE'
export const RESTART_GAME_OF_LIFE = 'gameOfLife/RESTART_GAME_OF_LIFE'
export const TOGGLE_TILE_STATE = 'gameOfLife/TOGGLE_TILE_STATE'
export const GAME_OVER = 'gameOfLife/GAME_OVER'

export interface Tile {
  id: number
  alive: boolean
}

export interface Action<T> extends ReduxAction {
  payload?: T
}
