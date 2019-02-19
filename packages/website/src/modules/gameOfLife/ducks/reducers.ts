import {
  Action,
  INCREMENT_GENERATION,
  PAUSE_GAME_OF_LIFE,
  RESTART_GAME_OF_LIFE,
  START_GAME_OF_LIFE,
  Tile,
  TOGGLE_TILE_STATE,
  UPDATE_GAME,
} from './types'

interface State {
  running: boolean
  generation: number
  tiles: Tile[][]
}

const initialState: State = {
  running: false,
  generation: 0,
  tiles: [[]],
}

const reducers = (state: State = initialState, { type, payload }: Action<any>): State => {
  switch (type) {
    case START_GAME_OF_LIFE:
      return { ...state, running: true }
    case PAUSE_GAME_OF_LIFE:
      return { ...state, running: false }
    case RESTART_GAME_OF_LIFE:
      return { ...state, ...{ tiles: fillBoardWithRandomData(25), generation: 0, running: false } }
    case UPDATE_GAME:
      return { ...state, tiles: payload }
    case INCREMENT_GENERATION:
      return { ...state, generation: payload }
    case TOGGLE_TILE_STATE:
      const { tiles } = state

      const newTiles = tiles.map(row =>
        row.map(cell => {
          if (cell.id === payload) {
            return { ...cell, alive: !cell.alive }
          }

          return cell
        }),
      )

      return { ...state, tiles: newTiles }
    default:
      return initialState
  }
}

export const fillBoardWithRandomData = (percent: number = 0, length: number = 35): Tile[][] => {
  let i = 0

  return Array.from({ length }, () =>
    Array.from({ length }, () => ({
      id: i += 1,
      alive: Math.floor(Math.random() * 100) < percent,
    })),
  )
}

export default reducers
