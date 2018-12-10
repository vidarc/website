import { Film, Species, Starship, Vehicle } from '.'

export interface Person {
  id: number
  homeworld: string
  species: Species[] | string[]
  films: Film[] | string[]
  eye_color: string
  gender: string
  height: string
  hair_color: string
  starships: Starship[] | string[]
  birth_year: string
  name: string
  mass: string
  vehicles: Vehicle[] | string[]
  skin_color: string
}
