// @flow

import type {
  Person, Planet, Species, Starship, Vehicle,
} from '.'

export type Film = {
  id: number,
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  species: Array<Species>,
  starships: Array<Starship>,
  vehicles: Array<Vehicle>,
  characters: Array<Person>,
  planets: Array<Planet>
}
