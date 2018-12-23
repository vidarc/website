import { INCREMENT_GENERATION, Tile, UPDATE_GAME } from './types'

export const initGame = () => {
  let i = 0
  const tiles: Tile[][] = Array(25)
    .fill(null)
    .map(row =>
      Array(26)
        .fill(null)
        .map(entry => ({
          id: i += 1,
          alive: Math.floor(Math.random() * 100) < 25
        }))
    )

  return {
    type: UPDATE_GAME,
    payload: tiles
  }
}

export const updateGameBoard = payload => ({
  payload,
  type: UPDATE_GAME
})

export const incrementGeneration = payload => ({
  payload,
  type: INCREMENT_GENERATION
})

export const processGeneration = () => (dispatch, getState) => {
  const { gameOfLife } = getState()

  const payload = [...gameOfLife.tiles]

  gameOfLife.tiles.forEach((row, rowNum) =>
    row.forEach((cell, colNum) => {
      if (cell.alive) {
        if (
          calculateNeighbors(gameOfLife.tiles, {
            rowNum,
            colNum
          }) < 2
        ) {
          payload[rowNum][colNum].alive = false
        } else if (
          calculateNeighbors(gameOfLife.tiles, {
            rowNum,
            colNum
          }) > 3
        ) {
          payload[rowNum][colNum].alive = false
        }
      }

      if (
        !cell.alive &&
        calculateNeighbors(gameOfLife.tiles, {
          rowNum,
          colNum
        }) === 3
      ) {
        payload[rowNum][colNum].alive = true
      }
    })
  )

  dispatch(updateGameBoard(payload))
  dispatch(incrementGeneration(gameOfLife.generation + 1))
}

export const calculateNeighbors = (gameBoard: Tile[][], coords: { rowNum: number; colNum: number }) => {
  const { rowNum, colNum } = coords
  let neighbors = 0

  const matrix = [
    [rowNum - 1, colNum - 1],
    [rowNum, colNum - 1],
    [rowNum + 1, colNum - 1],
    [rowNum - 1, colNum],
    [rowNum + 1, colNum],
    [rowNum - 1, colNum + 1],
    [rowNum, colNum + 1],
    [rowNum + 1, colNum + 1]
  ]

  matrix.forEach(([row, col]) => (tileIsAlive(row, col, gameBoard) ? (neighbors += 1) : null))

  return neighbors
}

const tileIsAlive = (row: number, col: number, gameBoard: Tile[][]) =>
  row >= 0 && row < gameBoard.length && col >= 0 && col < gameBoard.length && gameBoard[row][col].alive
