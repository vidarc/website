import { Tile } from './types'

interface State {
  tiles: Tile[][]
}

const initialState: State = {
  tiles: [[]]
}

const gameOfLife = (state: State = initialState, { type, payload }) => {
  switch (type) {
    case 'INIT_GAME':
      return { ...state, tiles: payload }
    default:
      return initialState
  }
}

export default gameOfLife
