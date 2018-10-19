// @flow

// eslint-disable-next-line import/no-extraneous-dependencies
import { type Person } from '@mattailes/types'
import { gql } from 'apollo-server-express'

import { getAll, getOne, loader } from './helpers'

export const PersonTypeDef = gql`
  extend type Query {
    getAllPeople: [Person]
    getPerson(id: Int): Person
  }

  type Person {
    # The url of the planet resource that this person was born on.
    homeworld: String
    # The url of the species resource that this person is.
    species: [Species]
    # An array of urls of film resources that this person has been in.
    films: [Film]
    # The eye color of this person.
    eye_color: String
    # The gender of this person (if known).
    gender: String
    # The height of this person in meters.
    height: String
    # The hair color of this person.
    hair_color: String
    # An array of starship resources that this person has piloted
    starships: [Starship]
    # The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).
    birth_year: String
    # The name of this person.
    name: String
    # The mass of this person in kilograms.
    mass: String
    # An array of vehicle resources that this person has piloted
    vehicles: [Vehicle]
    # The skin color of this person.
    skin_color: String
  }
`

export const personResolvers = {
  Query: {
    getAllPeople: () => getAll('people'),
    getPerson: (_: any, { id }: { id: number }) => getOne('people', id),
  },

  Person: {
    films: ({ films }: Person) => loader.loadMany(films),
    species: ({ species }: Person) => loader.loadMany(species),
    starships: ({ starships }: Person) => loader.loadMany(starships),
    vehicles: ({ vehicles }: Person) => loader.loadMany(vehicles),
  },
}
