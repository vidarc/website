import { getRandomArt } from '../api/artApi'
import * as types from './actionTypes'

export function loadRandomArtSuccess(randomArtCollection) {
  return {
    type: types.LOAD_RANDOM_ART_SUCCESS,
    randomArtCollection,
  }
}

export function loadRandomArt() {
  return dispatch =>
    getRandomArt()
      .then(randomArtCollection => dispatch(loadRandomArtSuccess(randomArtCollection)))
      .catch(error => console.log(error))
}
