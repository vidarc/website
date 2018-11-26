// @flow

import type { Film, Person } from '.'

export type Planet = {
  id: number,
  surface_water: string,
  population: string,
  diameter: string,
  residents: Array<Person>,
  gravity: string,
  rotation_period: string,
  films: Array<Film>,
  orbital_period: string,
  climate: string,
  name: string,
  terrain: string
}
