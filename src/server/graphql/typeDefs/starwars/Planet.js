import gql from 'graphql-tag'

import { Person, Film } from './'

const Planet = gql`
  type Planet {
    # The percentage of the planet surface that is naturally occuring water or bodies of water.
    surface_water: String
    # The average populationof sentient beings inhabiting this planet.
    population: String
    # the ISO 8601 date format of the time that this resource was edited.
    edited: String
    # The hypermedia URL of this resource.
    url: String
    # The diameter of this planet in kilometers.
    diameter: String
    # An array of People URL Resources that live on this planet.
    residents: [Person]
    # A number denoting the gravity of this planet. Where 1 is normal.
    gravity: String
    # The number of standard hours it takes for this planet to complete a single rotation on its axis.
    rotation_period: String
    # An array of Film URL Resources that this planet has appeared in.
    films: [Film]
    # The number of standard days it takes for this planet to complete a single orbit of its local star.
    orbital_period: String
    # The climate of this planet. Comma-seperated if diverse.
    climate: String
    # The name of this planet.
    name: String
    # the terrain of this planet. Comma-seperated if diverse.
    terrain: String
    # The ISO 8601 date format of the time that this resource was created.
    created: String
  }
`
export default () => [Planet, Person, Film]
