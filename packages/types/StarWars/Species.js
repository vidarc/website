// @flow

import type { Film, Person } from '.'

export type Species = {
  id: number,
  skin_colors: string,
  hair_colors: string,
  people: Array<Person>,
  average_lifespan: string,
  classification: string,
  eye_colors: string,
  homeworld: string,
  language: string,
  films: Array<Film>,
  name: string,
  average_height: string,
  designation: string
}
