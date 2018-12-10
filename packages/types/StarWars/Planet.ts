import { Film, Person } from '.'

export interface Planet {
  id: number
  surface_water: string
  population: string
  diameter: string
  residents: Person[] | string[]
  gravity: string
  rotation_period: string
  films: Film[] | string[]
  orbital_period: string
  climate: string
  name: string
  terrain: string
}
