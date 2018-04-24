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

  Person: {
    films: ({ films }) => loader.loadMany(films),
    species: ({ species }) => loader.loadMany(species),
    starships: ({ starships }) => loader.loadMany(starships),
    vehicles: ({ vehicles }) => loader.loadMany(vehicles),
  },

  Planet: {
    residents: ({ residents }) => loader.loadMany(residents),
    films: ({ films }) => loader.loadMany(films),
  },

  Species: {
    people: ({ people }) => loader.loadMany(people),
    films: ({ films }) => loader.loadMany(films),
  },

  Starship: {
    pilots: ({ pilots }) => loader.loadMany(pilots),
    films: ({ films }) => loader.loadMany(films),
  },

  Vehicle: {
    pilots: ({ pilots }) => loader.loadMany(pilots),
    films: ({ films }) => loader.loadMany(films),
  },
}
export default resolvers
