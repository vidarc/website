import { Film, Person } from '.'

export interface Starship {
  id: number
  passengers: string
  consumables: string
  model: string
  starship_class: string
  pilots: Person[]
  crew: string
  hyperdrive_rating: string
  MGLT: string
  manufacturer: string
  cargo_capacity: string
  films: Film[]
  length: string
  name: string
  max_atmosphering_speed: string
  cost_in_credits: string
}
