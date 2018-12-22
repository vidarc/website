import { INCREMENT_GENERATION, Tile, UPDATE_GAME } from './types'

interface State {
  generation: number
  tiles: Tile[][]
}

const initialState: State = {
  generation: 0,
  tiles: [[]]
}

const gameOfLife = (state: State = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_GAME:
      return { ...state, tiles: payload }
    case INCREMENT_GENERATION:
      return { ...state, generation: payload }
    default:
      return initialState
  }
}

export default gameOfLife
