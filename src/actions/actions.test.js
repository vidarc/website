import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'
import * as artActions from './artActions'
import * as types from './actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('artActions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates LOAD_RANDOM_ART when fetching the art collection is done', () => {
    nock('https://www.mattailes.net')
      .get('/art/images')
      .reply(200, [{ collection: 1, title: 'title one' }, { collection: 2, title: 'title two' }], {
        'Access-Control-Allow-Origin': '*',
      })

    const expectedActions = [
      {
        type: types.REQUEST_RANDOM_ART,
        isLoading: true,
      },
      {
        type: types.LOAD_RANDOM_ART,
        isLoading: false,
        collection: [{ collection: 1, title: 'title one' }, { collection: 2, title: 'title two' }],
      },
    ]
    const store = mockStore({ isLoading: false, collection: [] })

    return store.dispatch(artActions.fetchRandomArt()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
