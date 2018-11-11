// @flow

import type { Film, Person } from '.'

export type Starship = {
  id: number,
  passengers: string,
  consumables: string,
  model: string,
  starship_class: string,
  pilots: Array<Person>,
  crew: string,
  hyperdrive_rating: string,
  MGLT: string,
  manufacturer: string,
  cargo_capacity: string,
  films: Array<Film>,
  length: string,
  name: string,
  max_atmosphering_speed: string,
  cost_in_credits: string
}
