import { Film, Species, Starship, Vehicle } from '.'

export interface Person {
  id: number
  homeworld: number
  species: Species[] | number[]
  films: Film[] | number[]
  eye_color: string
  gender: string
  height: string
  hair_color: string
  starships: Starship[] | number[]
  birth_year: string
  name: string
  mass: string
  vehicles: Vehicle[] | number[]
  skin_color: string
}
