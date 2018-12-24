import { INCREMENT_GENERATION, START_GAME_OF_LIFE, Tile, UPDATE_GAME } from './types'

interface State {
  generation: number
  tiles: Tile[][]
}

const initialState: State = {
  generation: 0,
  tiles: [[]]
}

const reducers = (state: State = initialState, { type, payload }) => {
  switch (type) {
    case START_GAME_OF_LIFE:
      return { ...state }
    case UPDATE_GAME:
      return { ...state, tiles: payload }
    case INCREMENT_GENERATION:
      return { ...state, generation: payload }
    default:
      return initialState
  }
}

export default reducers
