// @flow

import type { Film, Person } from '.'

export type Vehicle = {
  id: number,
  passengers: string,
  vehicle_class: string,
  consumables: string,
  model: string,
  pilots: Array<Person>,
  crew: string,
  manufacturer: string,
  cargo_capacity: string,
  films: Array<Film>,
  length: string,
  name: string,
  max_atmosphering_speed: string,
  cost_in_credits: string
}
