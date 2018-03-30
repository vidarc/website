import { getAll, loader } from './../../helpers'

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
    starships: ({ starships }) => loader.loadMany(starships),
    vehicles: ({ vehicles }) => loader.loadMany(vehicles),
    characters: ({ characters }) => loader.loadMany(characters),
    planets: ({ planets }) => loader.loadMany(planets),
  },

  // People: {},
  //
  // Planets: {},
  //
  // Species: {},
  //
  // Starships: {},
  //
  // Vehicles: {},
}
export default resolvers
