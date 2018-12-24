import { put, select, takeEvery } from 'redux-saga/effects'

import { START_GAME_OF_LIFE, Tile, UPDATE_GAME } from './types'

export function* watchStart() {
  yield takeEvery(START_GAME_OF_LIFE, runGameOfLife)
}

export function* runGameOfLife() {
  const state = yield select()

  const nextGeneration = processGeneration(state)

  yield put({ type: UPDATE_GAME, payload: nextGeneration })
}

export const processGeneration = state => {
  const { gameOfLife } = state

  const payload = [...gameOfLife.tiles]

  gameOfLife.tiles.forEach((row, rowNum) =>
    row.forEach((cell, colNum) => {
      if (
        (cell.alive && calculateNeighbors(gameOfLife.tiles, { rowNum, colNum }) < 2) ||
        calculateNeighbors(gameOfLife.tiles, { rowNum, colNum }) > 3
      ) {
        payload[rowNum][colNum].alive = false
      }

      if (!cell.alive && calculateNeighbors(gameOfLife.tiles, { rowNum, colNum }) === 3) {
        payload[rowNum][colNum].alive = true
      }
    })
  )

  return payload
}

export const calculateNeighbors = (gameBoard: Tile[][], coords: { rowNum: number; colNum: number }) => {
  const { rowNum, colNum } = coords
  let neighbors = 0

  const matrix = [
    [rowNum - 1, colNum - 1],
    [rowNum - 1, colNum],
    [rowNum - 1, colNum + 1],
    [rowNum, colNum - 1],
    [rowNum, colNum + 1],
    [rowNum + 1, colNum - 1],
    [rowNum + 1, colNum],
    [rowNum + 1, colNum + 1]
  ]

  matrix.forEach(([row, col]) => (tileIsAlive(row, col, gameBoard) ? (neighbors += 1) : null))

  return neighbors
}

const tileIsAlive = (row: number, col: number, gameBoard: Tile[][]) =>
  row >= 0 && row < gameBoard.length && col >= 0 && col < gameBoard.length && gameBoard[row][col].alive
