import { call, delay, put, race, select, take } from 'redux-saga/effects'

import { incrementGeneration, updateGameBoard } from './actions'
import { PAUSE_GAME_OF_LIFE, RESTART_GAME_OF_LIFE, START_GAME_OF_LIFE, Tile } from './types'

export function* watchStart() {
  while (true) {
    yield take(START_GAME_OF_LIFE)

    while (true) {
      const { pause, restart } = yield race({
        pause: take(PAUSE_GAME_OF_LIFE),
        restart: take(RESTART_GAME_OF_LIFE),
        tick: call(runGameOfLife),
      })

      if (pause || restart) break
    }
  }
}

export function* runGameOfLife() {
  yield delay(500)

  const { gameOfLife } = yield select()
  yield put(updateGameBoard(processGeneration(gameOfLife)))
  yield put(incrementGeneration(gameOfLife.generation + 1))
}

export const processGeneration = ({ tiles }): Tile[][] => {
  const payload = [...tiles]

  tiles.forEach((row, rowNum) =>
    row.forEach((cell, colNum) => {
      if (
        (cell.alive && calculateNeighbors(tiles, { rowNum, colNum }) < 2) ||
        calculateNeighbors(tiles, { rowNum, colNum }) > 3
      ) {
        payload[rowNum][colNum].alive = false
      }

      if (!cell.alive && calculateNeighbors(tiles, { rowNum, colNum }) === 3) {
        payload[rowNum][colNum].alive = true
      }
    }),
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
    [rowNum + 1, colNum + 1],
  ]

  matrix.forEach(([row, col]) => (tileIsAlive(row, col, gameBoard) ? (neighbors += 1) : null))

  return neighbors
}

const tileIsAlive = (row: number, col: number, gameBoard: Tile[][]) =>
  row >= 0 && row < gameBoard.length && col >= 0 && col < gameBoard.length && gameBoard[row][col].alive
