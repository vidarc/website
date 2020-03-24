// eslint-disable-next-line import/no-extraneous-dependencies
import { Species } from '@mattailes/types/StarWars'
import { gql } from 'apollo-server-cloud-functions'

import { batchLoad, getAll, getOne, loader } from './helpers'

export const SpeciesTypeDef = gql`
  extend type Query {
    getAllSpecies: [Species]
    getSpecies(id: Int): Species
  }

  type Species {
    id: Int
    # A comma-seperated string of common skin colors for this species,
    # none if this species does not typically have skin.
    skin_colors: String
    # A comma-seperated string of common hair colors for this species, none if this species
    # does not typically have hair.
    hair_colors: String
    # An array of People URL Resources that are a part of this species.
    people: [Person]
    # The average lifespan of this species in years.
    average_lifespan: String
    # The classification of this species.
    classification: String
    # A comma-seperated string of common eye colors for this species, none if this species does not typically have eyes.
    eye_colors: String
    # The URL of a planet resource, a planet that this species originates from.
    homeworld: Planet
    # The language commonly spoken by this species.
    language: String
    # An array of Film URL Resources that this species has appeared in.
    films: [Film]
    # The name of this species.
    name: String
    # The average height of this person in centimeters.
    average_height: String
    # The designation of this species.
    designation: String
  }
`

export const speciesResolvers = {
  Query: {
    getAllSpecies: () => getAll('species'),
    getSpecies: (_: any, { id }: { id: number }) => getOne('species', id),
  },

  Species: {
    people: ({ people }: Species) => batchLoad(people as number[], 'people'),
    films: ({ films }: Species) => batchLoad(films as number[], 'films'),
    homeworld: ({ homeworld }: Species) => loader.load({ id: homeworld, type: 'planets' }),
  },
}
