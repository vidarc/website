// @flow

import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'

import { FilmTypeDef, filmResolvers } from './Film'
import { PersonTypeDef, personResolvers } from './Person'
import { PlanetTypeDef, planetResolvers } from './Planet'
import { SpeciesTypeDef, speciesResolvers } from './Species'
import { StarshipTypeDef, starshipResolvers } from './Starship'
import { VehicleTypeDef, vehicleResolvers } from './Vehicle'

const Query = gql`
  type Query {
    _empty: String
  }
`

const resolvers = {}

const starwarsSchema = makeExecutableSchema({
  typeDefs: [Query, FilmTypeDef, PersonTypeDef, PlanetTypeDef, SpeciesTypeDef, StarshipTypeDef, VehicleTypeDef],
  resolvers: merge(
    resolvers,
    filmResolvers,
    personResolvers,
    planetResolvers,
    speciesResolvers,
    starshipResolvers,
    vehicleResolvers,
  ),
})

export default starwarsSchema
