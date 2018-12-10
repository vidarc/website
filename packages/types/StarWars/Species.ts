import { Film, Person } from '.'

export interface Species {
  id: number
  skin_colors: string
  hair_colors: string
  people: Person[] | string[]
  average_lifespan: string
  classification: string
  eye_colors: string
  homeworld: string
  language: string
  films: Film[] | string[]
  name: string
  average_height: string
  designation: string
}
