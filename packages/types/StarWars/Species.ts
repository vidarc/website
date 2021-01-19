import type { Film } from './Film'
import type { Person } from './Person'

export interface Species {
  id: number
  skin_colors: string
  hair_colors: string
  people: Person[] | number[]
  average_lifespan: string
  classification: string
  eye_colors: string
  homeworld: number
  language: string
  films: Film[] | number[]
  name: string
  average_height: string
  designation: string
}
