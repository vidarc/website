import React from 'react'

import styled from '@emotion/styled'
import GameBoardRow from './GameBoardRow'
import { Tile } from '../ducks/types'

const Board = styled.div`
  border: 1px solid black;
  margin: auto;
  width: 75%;
`

interface Props {
  tiles: Tile[][]
}
const GameBoard: React.SFC<Props> = ({ tiles }) => (
  <Board>
    {tiles.map((row, index) => (
      <GameBoardRow key={index} tiles={row} />
    ))}
  </Board>
)

export default GameBoard
