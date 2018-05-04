import gql from 'graphql-tag'

import { Film, Species, Starship, Vehicle } from './'

const Person = gql`
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
export default () => [Person, Species, Film, Starship, Vehicle]
