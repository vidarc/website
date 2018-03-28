import fetch from 'cross-fetch'

const get = async url =>
  fetch(url)
    .then(response => response.json())
    .then(response => response.results)

const resolvers = {
  Query: {
    getFilms: () => get('https://swapi.co/api/films/'),

    getPeople: () => get('https://swapi.co/api/people/'),

    getPlanets: () => get('https://swapi.co/api/planets/'),

    species: () => get('https://swapi.co/api/species/'),

    getStarships: () => get('https://swapi.co/api/starships/'),

    getVehicles: () => get('https://swapi.co/api/vehicles/'),
  },
}
export default resolvers
