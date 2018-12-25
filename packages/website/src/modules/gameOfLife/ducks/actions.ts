import { Action, INCREMENT_GENERATION, PAUSE_GAME_OF_LIFE, START_GAME_OF_LIFE, Tile, UPDATE_GAME } from './types'

export const initGame = (): Action<Tile[][]> => {
  let i = 0
  const payload: Tile[][] = Array(25)
    .fill(null)
    .map(row =>
      Array(26)
        .fill(null)
        .map(entry => ({
          id: i += 1,
          alive: Math.floor(Math.random() * 100) < 25
        }))
    )

  return {
    payload,
    type: UPDATE_GAME
  }
}

export const startGameOfLife = (): Action<null> => ({
  type: START_GAME_OF_LIFE
})

export const pauseGameOfLife = (): Action<null> => ({
  type: PAUSE_GAME_OF_LIFE
})

export const updateGameBoard = (payload): Action<Tile[][]> => ({
  payload,
  type: UPDATE_GAME
})

export const incrementGeneration = (payload): Action<number> => ({
  payload,
  type: INCREMENT_GENERATION
})
