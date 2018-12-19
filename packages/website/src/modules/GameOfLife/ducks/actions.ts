import { Tile } from './types'

const initGame = () => {
  let i = 0
  const tiles: Tile[][] = Array(50)
    .fill(null)
    .map(row =>
      Array(50)
        .fill(null)
        .map(entry => ({
          id: i += 1,
          alive: Math.floor(Math.random() * 100) < 25
        }))
    )

  return {
    type: 'INIT_GAME',
    payload: tiles
  }
}

export default { initGame }
