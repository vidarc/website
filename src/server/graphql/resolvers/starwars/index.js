import fetch from 'cross-fetch'
import DataLoader from 'dataloader'

const getAll = async type =>
  fetch(`https://swapi.co/api/${type}/`)
    .then(response => response.json())
    .then(response => response.results)

const loader = new DataLoader((urls) => {
  const promises = urls.map(url => fetch(url).then(response => response.json()))

  return Promise.all(promises)
})

const resolvers = {
  Query: {
    getFilms: () => getAll('films'),
    getPeople: () => getAll('people'),
    getPlanets: () => getAll('planets'),
    getSpecies: () => getAll('species'),
    getStarships: () => getAll('starships'),
    getVehicles: () => getAll('vehicles'),
  },

  Film: {
    species: ({ species }) => loader.loadMany(species),
  },
}
export default resolvers
