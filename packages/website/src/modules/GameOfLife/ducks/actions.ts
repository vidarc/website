import { Action, INCREMENT_GENERATION, START_GAME_OF_LIFE, Tile, UPDATE_GAME } from './types'

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

export const startGameOfLife = () => ({
  type: START_GAME_OF_LIFE
})

export const updateGameBoard = payload => ({
  payload,
  type: UPDATE_GAME
})

export const incrementGeneration = payload => ({
  payload,
  type: INCREMENT_GENERATION
})
