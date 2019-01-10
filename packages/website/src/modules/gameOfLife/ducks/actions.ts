import {
  Action,
  INCREMENT_GENERATION,
  PAUSE_GAME_OF_LIFE,
  RESTART_GAME_OF_LIFE,
  START_GAME_OF_LIFE,
  Tile,
  UPDATE_GAME,
} from './types'

export const fillBoardWithRandomData = (length: number = 25): Tile[][] => {
  let i = 0

  return Array.from({ length }, () =>
    Array.from({ length }, () => ({
      id: i += 1,
      alive: Math.floor(Math.random() * 100) < 25,
    })),
  )
}

export const initGame = (): Action<Tile[][]> => ({
  payload: fillBoardWithRandomData(),
  type: UPDATE_GAME,
})

export const startGameOfLife = (): Action<null> => ({
  type: START_GAME_OF_LIFE,
})

export const pauseGameOfLife = (): Action<null> => ({
  type: PAUSE_GAME_OF_LIFE,
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
