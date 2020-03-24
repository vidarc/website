import { call, delay, put, race, select, take } from 'redux-saga/effects'

import { gameOver, incrementGeneration, updateGameBoard } from './actions'
import {
  GAME_OVER,
  PAUSE_GAME_OF_LIFE,
  RESTART_GAME_OF_LIFE,
  START_GAME_OF_LIFE,
  Tile,
} from './types'

const tileIsAlive = (row: number, col: number, gameBoard: Tile[][]) =>
  row >= 0 &&
  row < gameBoard.length &&
  col >= 0 &&
  col < gameBoard.length &&
  gameBoard[row][col].alive

export const calculateNeighbors = (
  gameBoard: Tile[][],
  coords: { rowNum: number; colNum: number }
) => {
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

  matrix.forEach(([row, col]) => {
    if (tileIsAlive(row, col, gameBoard)) {
      neighbors += 1
    }
  })

  return neighbors
}

export const processGeneration = ({ tiles }): Tile[][] => {
  const payload = tiles.map((array) => array.slice(0))

  tiles.forEach((row, rowNum) =>
    row.forEach((cell, colNum) => {
      const tileData = { ...payload[rowNum][colNum] }
      if (
        (cell.alive && calculateNeighbors(tiles, { rowNum, colNum }) < 2) ||
        calculateNeighbors(tiles, { rowNum, colNum }) > 3
      ) {
        tileData.alive = false
        payload[rowNum][colNum] = tileData
      }

      if (!cell.alive && calculateNeighbors(tiles, { rowNum, colNum }) === 3) {
        tileData.alive = true
        payload[rowNum][colNum] = tileData
      }
    })
  )

  return payload
}

export function* runGameOfLife() {
  yield delay(500)

  const { gameOfLife } = yield select()

  const nextGeneration = processGeneration(gameOfLife)
  yield put(updateGameBoard(nextGeneration))

  if (!nextGeneration.some((row) => row.some((tile) => tile.alive))) {
    yield put(gameOver())
  } else {
    yield put(incrementGeneration(gameOfLife.generation + 1))
  }
}

export function* watchStart() {
  while (true) {
    yield take(START_GAME_OF_LIFE)

    while (true) {
      const { pause, restart, gameOver: gameOverResult } = yield race({
        pause: take(PAUSE_GAME_OF_LIFE),
        restart: take(RESTART_GAME_OF_LIFE),
        gameOver: take(GAME_OVER),
        tick: call(runGameOfLife),
      })

      if (pause || restart || gameOverResult) break
    }
  }
}
