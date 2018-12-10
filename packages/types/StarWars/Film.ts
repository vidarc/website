import { Person, Planet, Species, Starship, Vehicle } from '.'

export interface Film {
  id: number
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: Species[]
  starships: Starship[]
  vehicles: Vehicle[]
  characters: Person[]
  planets: Planet[]
}
