import React from 'react'

import styled from '@emotion/styled'

import GameBoardRowContainer from '../containers/GameBoardRowContainer'
import { Tile } from '../ducks/types'

const Board = styled.div`
  border: 1px solid black;
  margin: auto;
  width: 75%;
`

interface Props {
  tiles: Tile[][]
  size: number
}

const start = (length, size): number => (length - size) / 2

const end = (length, size): number => length - (length - size) / 2

const GameBoard: React.SFC<Props> = ({ tiles, size }) => (
  <Board>
    {tiles.slice(start(tiles.length, size), end(tiles.length, size)).map((row, index) => (
      <GameBoardRowContainer key={index} tiles={row} size={size} />
    ))}
  </Board>
)

export default GameBoard
