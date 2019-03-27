import { fillBoardWithRandomData } from './reducers'
import {
  Action,
  GAME_OVER,
  INCREMENT_GENERATION,
  PAUSE_GAME_OF_LIFE,
  RESTART_GAME_OF_LIFE,
  START_GAME_OF_LIFE,
  Tile,
  TOGGLE_TILE_STATE,
  UPDATE_GAME,
} from './types'

export const initGame = (size: number): Action<Tile[][]> => ({
  payload: fillBoardWithRandomData(0, size + 10),
  type: UPDATE_GAME,
})

export const startGameOfLife = (): Action<null> => ({
  type: START_GAME_OF_LIFE,
})

export const pauseGameOfLife = (): Action<null> => ({
  type: PAUSE_GAME_OF_LIFE,
})

export const gameOver = (): Action<null> => ({
  type: GAME_OVER,
})

export const restartGameOfLife = (): Action<null> => ({
  type: RESTART_GAME_OF_LIFE,
})

export const updateGameBoard = (payload): Action<Tile[][]> => ({
  payload,
  type: UPDATE_GAME,
})

export const incrementGeneration = (payload): Action<number> => ({
  payload,
  type: INCREMENT_GENERATION,
})

export const toggleTileState = (payload): Action<number> => ({
  payload,
  type: TOGGLE_TILE_STATE,
})
