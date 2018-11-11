// @flow

import type {
  Film, Species, Starship, Vehicle,
} from '.'

export type Person = {
  id: number,
  homeworld: string,
  species: Array<Species>,
  films: Array<Film>,
  eye_color: string,
  gender: string,
  height: string,
  hair_color: string,
  starships: Array<Starship>,
  birth_year: string,
  name: string,
  mass: string,
  vehicles: Array<Vehicle>,
  skin_color: string
}
