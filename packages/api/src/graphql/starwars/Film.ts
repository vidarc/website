import { Film, Species } from '@mattailes/types/StarWars'
import { gql } from 'apollo-server-express'

import { getAll, getOne, loader } from './helpers'

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
    species: ({ species }: Film) => {
      const speciesArray = species as number[]

      return loader.loadMany(
        speciesArray.map(id => ({
          id,
          type: 'species'
        }))
      )
    },
    starships: ({ starships }: Film) => loader.loadMany(starships as string[]),
    vehicles: ({ vehicles }: Film) => loader.loadMany(vehicles as string[]),
    characters: ({ characters }: Film) =>
      loader.loadMany(characters as string[]),
    planets: ({ planets }: Film) => loader.loadMany(planets as string[])
  }
}
