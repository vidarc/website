import { initGame, pauseGameOfLife, startGameOfLife } from '../actions'
import { Action, PAUSE_GAME_OF_LIFE, START_GAME_OF_LIFE, UPDATE_GAME } from '../types'

describe('game of life redux actions', () => {
  it('should return the expected action body for initGame', () => {
    const expected: Action<any> = {
      type: UPDATE_GAME,
      payload: [[]],
    }

    const actual = initGame()

    expect(actual.type).toEqual(expected.type)
    expect(actual.payload).toHaveLength(25)
  })

  it('should return the expected action body for starting the game', () => {
    const expected: Action<any> = {
      type: START_GAME_OF_LIFE,
    }

    expect(startGameOfLife()).toEqual(expected)
  })

  it('should return the expected action body for pausing', () => {
    const expected: Action<any> = {
      type: PAUSE_GAME_OF_LIFE,
    }

    expect(pauseGameOfLife()).toEqual(expected)
  })
})
