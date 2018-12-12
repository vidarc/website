import { Film } from '@mattailes/types/StarWars'
import { gql } from 'apollo-server-express'

import { batchLoad, getAll, getOne } from './helpers'

export const FilmTypeDef = gql`
  extend type Query {
    getAllFilms: [Film]
    getFilm(id: Int): Film
  }

  type Film {
    # The id to match in the database
    id: Int
    # The title of this film
    title: String
    # The episode number of this film.
    episode_id: Int
    # The opening paragraphs at the beginning of this film.
    opening_crawl: String
    # The name of the director of this film.
    director: String
    # The name(s) of the producer(s) of this film. Comma separated.
    producer: String
    # The ISO 8601 date format of film release at original creator country.
    release_date: String
    # An array of species resource URLs that are in this film.
    species: [Species]
    # An array of starship resource URLs that are in this film.
    starships: [Starship]
    # An array of vehicle resource URLs that are in this film.
    vehicles: [Vehicle]
    # An array of people resource URLs that are in this film.
    characters: [Person]
    # An array of planet resource URLs that are in this film.
    planets: [Planet]
  }
`

export const filmResolvers = {
  Query: {
    getAllFilms: () => getAll('films'),
    getFilm: (_: any, { id }: { id: number }) => getOne('films', id)
  },

  Film: {
    species: ({ species }: Film) => batchLoad(species as number[], 'species'),
    starships: ({ starships }: Film) =>
      batchLoad(starships as number[], 'starships'),
    vehicles: ({ vehicles }: Film) =>
      batchLoad(vehicles as number[], 'vehicles'),
    characters: ({ characters }: Film) =>
      batchLoad(characters as number[], 'people'),
    planets: ({ planets }: Film) => batchLoad(planets as number[], 'planets')
  }
}
