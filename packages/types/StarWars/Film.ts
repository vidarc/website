import { Person, Planet, Species, Starship, Vehicle } from '.'

export interface Film {
  id: number
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: Species[] | string[]
  starships: Starship[] | string[]
  vehicles: Vehicle[] | string[]
  characters: Person[] | string[]
  planets: Planet[] | string[]
}
