import { gql, makeExecutableSchema } from 'apollo-server-cloud-functions'
import merge from 'lodash.merge'

import { filmResolvers, FilmTypeDef } from './Film'
import { personResolvers, PersonTypeDef } from './Person'
import { planetResolvers, PlanetTypeDef } from './Planet'
import { speciesResolvers, SpeciesTypeDef } from './Species'
import { starshipResolvers, StarshipTypeDef } from './Starship'
import { vehicleResolvers, VehicleTypeDef } from './Vehicle'

const Query = gql`
  type Query {
    _empty: String
  }
`

const resolvers = {}

const starwarsSchema = makeExecutableSchema({
  typeDefs: [
    Query,
    FilmTypeDef,
    PersonTypeDef,
    PlanetTypeDef,
    SpeciesTypeDef,
    StarshipTypeDef,
    VehicleTypeDef
  ],
  resolvers: merge(
    resolvers,
    filmResolvers,
    personResolvers,
    planetResolvers,
    speciesResolvers,
    starshipResolvers,
    vehicleResolvers
  )
})

export default starwarsSchema
