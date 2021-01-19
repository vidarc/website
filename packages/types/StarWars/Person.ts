import type { Film } from './Film'
import type { Species } from './Species'
import type { Starship } from './Starship'
import type { Vehicle } from './Vehicle'

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
