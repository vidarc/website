import * as types from '../actions/actionTypes'
import artReducer from './artReducer'

describe('artReducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isLoading: false,
      collection: [],
    }

    expect(artReducer(undefined, {})).toEqual(expectedState)
  })

  it('should handle REQUEST_RANDOM_ART', () => {
    const expectedState = {
      isLoading: true,
      collection: [],
    }

    expect(artReducer(undefined, { type: types.REQUEST_RANDOM_ART })).toEqual(expectedState)
  })

  it('should handle LOAD_RANDOM_ART', () => {
    const collection = [
      {
        collection: 1,
      },
      {
        collection: 2,
      },
    ]
    const expectedState = {
      randomArt: {
        isLoading: false,
        collection,
      },
    }

    expect(artReducer(undefined, { type: types.LOAD_RANDOM_ART, collection })).toEqual(expectedState)
  })
})
