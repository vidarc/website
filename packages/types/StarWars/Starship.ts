import type { Film } from './Film'
import type { Person } from './Person'

export interface Starship {
  id: number
  passengers: string
  consumables: string
  model: string
  starship_class: string
  pilots: Person[] | number[]
  crew: string
  hyperdrive_rating: string
  MGLT: string
  manufacturer: string
  cargo_capacity: string
  films: Film[] | number[]
  length: string
  name: string
  max_atmosphering_speed: string
  cost_in_credits: string
}
