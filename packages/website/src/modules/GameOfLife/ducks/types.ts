export const UPDATE_GAME = 'gameOfLife/UPDATE_GAME'
export const INCREMENT_GENERATION = 'gameOfLife/INCREMENT_GENERATION'

export interface Tile {
  id: number
  alive: boolean
}
