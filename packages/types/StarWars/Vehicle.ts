import { Film, Person } from '.'

export interface Vehicle {
  id: number
  passengers: string
  vehicle_class: string
  consumables: string
  model: string
  pilots: Person[] | string[]
  crew: string
  manufacturer: string
  cargo_capacity: string
  films: Film[] | string[]
  length: string
  name: string
  max_atmosphering_speed: string
  cost_in_credits: string
}
