// eslint-disable-next-line import/no-extraneous-dependencies
import { Person } from '@mattailes/types/StarWars'
import { gql } from 'apollo-server-cloud-functions'

import { batchLoad, getAll, getOne, loader } from '../helpers'

export const PersonTypeDef = gql`
  extend type Query {
    getAllPeople: [Person]
    getPerson(id: Int): Person
  }

  type Person {
    id: Int
    # The url of the planet resource that this person was born on.
    homeworld: Planet
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
    getAllPeople: () => getAll('starwars_people'),
    getPerson: (_: any, { id }: { id: number }) => getOne('starwars_people', id),
  },

  Person: {
    homeworld: ({ homeworld }: Person) =>
      loader.load({ id: homeworld, collection: 'starwars_people' }),
    films: ({ films }: Person) => batchLoad(films as number[], 'starwars_films'),
    species: ({ species }: Person) => batchLoad(species as number[], 'starwars_species'),
    starships: ({ starships }: Person) => batchLoad(starships as number[], 'starwars_starships'),
    vehicles: ({ vehicles }: Person) => batchLoad(vehicles as number[], 'starwars_vehicles'),
  },
}
