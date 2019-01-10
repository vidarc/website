import { calculateNeighbors, processGeneration } from '../sagas'
import { Tile } from '../types'

describe('game of life redux sags', () => {
  let alive: Tile
  let dead: Tile

  beforeEach(() => {
    alive = { id: 1, alive: true }
    dead = { id: 1, alive: false }
  })

  describe('processing generations should produce the expected shapes', () => {
    it('should correctly produce a blinker', () => {
      // prettier-ignore
      const array: Tile[][] = [
        [dead, dead, dead],
        [alive, alive, alive],
        [dead, dead, dead],
      ]

      const nextGen = processGeneration({ tiles: array })

      // prettier-ignore
      const expected: Tile[][] = [
        [dead, alive, dead],
        [dead, alive, dead],
        [dead, alive, dead],
      ]

      expect(nextGen).toStrictEqual(expected)
      expect(processGeneration({ tiles: nextGen })).toStrictEqual(array)
    })

    it('should produce a block', () => {
      // prettier-ignore
      const array: Tile[][] = [
        [dead, dead, dead, dead],
        [dead, alive, alive, dead],
        [dead, alive, alive, dead],
        [dead, dead, dead, dead],
      ]

      const actual = processGeneration({ tiles: array })

      expect(actual).toStrictEqual(array)
    })
  })

  describe('calculating number of neighbors', () => {
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
