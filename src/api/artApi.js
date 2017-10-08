const url = 'https://www.mattailes.net/art/images'

export function getRandomArt() {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}
