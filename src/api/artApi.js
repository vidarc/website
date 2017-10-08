import { RANDOM_ART_COLLECTION_API_URL } from '../utils/constants'

export default function getRandomArt() {
  return fetch(RANDOM_ART_COLLECTION_API_URL)
    .then(response => response.json())
    .catch(error => console.log(error))
}
