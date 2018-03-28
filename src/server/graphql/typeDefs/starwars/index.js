import Film from './Film'
import Person from './Person'
import Planet from './Planet'
import Species from './Species'
import Starship from './Starship'
import Vehicle from './Vehicle'

const Query = /* GraphQL */ `
  type Query {
    getFilms: [Film]
    getPeople: [Person]
    getPlanets: [Planet]
    getSpecies: [Species]
    getStarships: [Starship]
    getVehicles: [Vehicle]

    species: Species
  }
`

export { default as Film } from './Film'
export { default as Person } from './Person'
export { default as Planet } from './Planet'
export { default as Species } from './Species'
export { default as Starship } from './Starship'
export { default as Vehicle } from './Vehicle'

export default [Query, Film, Person, Planet, Species, Starship, Vehicle]
