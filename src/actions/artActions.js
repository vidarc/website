import * as types from './actionTypes'
import { RANDOM_ART_COLLECTION_API_URL } from '../utils/constants'

export function requestRandomArt() {
  return {
    type: types.REQUEST_RANDOM_ART,
    isLoading: true,
  }
}

export function loadRandomArt(collection) {
  return {
    type: types.LOAD_RANDOM_ART,
    isLoading: false,
    collection,
  }
}

export function fetchRandomArt() {
  return (dispatch) => {
    dispatch(requestRandomArt())
    return fetch(RANDOM_ART_COLLECTION_API_URL)
      .then(response => response.json())
      .then(json => dispatch(loadRandomArt(json)))
      .catch(error => console.log(error))
  }
}
