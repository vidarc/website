/* eslint-disable no-case-declarations */
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

export interface State {
  running: boolean
  gameOver: boolean
  generation: number
  tiles: Tile[][]
}

const initialState: State = {
  running: false,
  gameOver: false,
  generation: 0,
  tiles: [[]],
}

export const fillBoardWithRandomData = (percent: number = 0, length: number = 35): Tile[][] => {
  let i = 0

  return Array.from({ length }, () =>
    // eslint-disable-next-line no-return-assign
    Array.from({ length }, () => ({
      id: i += 1,
      alive: Math.floor(Math.random() * 100) < percent,
    }))
  )
}

const reducers = (state: State = initialState, { type, payload }: Action<any>): State => {
  switch (type) {
    case START_GAME_OF_LIFE:
      return { ...state, running: true }
    case PAUSE_GAME_OF_LIFE:
      return { ...state, running: false }
    case RESTART_GAME_OF_LIFE:
      return {
        ...state,
        tiles: fillBoardWithRandomData(0),
        generation: 0,
        running: false,
        gameOver: false,
      }
    case GAME_OVER:
      return { ...state, running: false, gameOver: true }
    case UPDATE_GAME:
      return { ...state, tiles: payload }
    case INCREMENT_GENERATION:
      return { ...state, generation: payload }
    case TOGGLE_TILE_STATE:
      const { tiles, running } = state

      if (running) return state

      const newTiles = tiles.map((row) =>
        row.map((cell) => {
          if (cell.id === payload) {
            return { ...cell, alive: !cell.alive }
          }

          return cell
        })
      )

      return { ...state, tiles: newTiles }
    default:
      return initialState
  }
}

export default reducers
