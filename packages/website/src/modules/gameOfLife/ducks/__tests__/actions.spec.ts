import { calculateNeighbors } from '../actions'
import { Tile } from '../types'

describe('game of life redux actions', () => {
  describe('calculating number of neighbors', () => {
    const alive: Tile = { id: 1, alive: true }
    const dead: Tile = { id: 1, alive: false }

    it('should return 8 for max number of possible neighbors', () => {
      // prettier-ignore
      const array: Tile[][] = [
        [alive, alive, alive],
        [alive, alive, alive],
        [alive, alive, alive],
      ]

      expect(calculateNeighbors(array, { rowNum: 1, colNum: 1 })).toEqual(8)
    })

    it('should return correctly for an edge node', () => {
      // prettier-ignore
      const array: Tile[][] = [
        [alive, alive, dead],
        [alive, alive, dead],
        [dead, dead, dead],
      ]

      expect(calculateNeighbors(array, { rowNum: 0, colNum: 0 })).toEqual(3)
    })

    it('should return 1 for one alive neighbor', () => {
      // prettier-ignore
      const array: Tile[][] = [
        [alive, dead, dead],
        [dead, alive, dead],
        [dead, dead, dead],
      ]

      expect(calculateNeighbors(array, { rowNum: 1, colNum: 1 })).toEqual(1)
    })
  })
})
