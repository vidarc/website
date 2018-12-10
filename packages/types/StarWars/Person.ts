import { Film, Species, Starship, Vehicle } from '.'

export interface Person {
  id: number
  homeworld: string
  species: Species[]
  films: Film[]
  eye_color: string
  gender: string
  height: string
  hair_color: string
  starships: Starship[]
  birth_year: string
  name: string
  mass: string
  vehicles: Vehicle[]
  skin_color: string
}
