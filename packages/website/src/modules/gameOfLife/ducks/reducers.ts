import { fillBoardWithRandomData } from './actions'
import {
  Action,
  INCREMENT_GENERATION,
  PAUSE_GAME_OF_LIFE,
  RESTART_GAME_OF_LIFE,
  START_GAME_OF_LIFE,
  Tile,
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
      return { ...state, ...{ tiles: fillBoardWithRandomData(), generation: 0, running: false } }
    case UPDATE_GAME:
      return { ...state, tiles: payload }
    case INCREMENT_GENERATION:
      return { ...state, generation: payload }
    default:
      return initialState
  }
}

export default reducers
