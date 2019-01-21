import React from 'react'

import styled from '@emotion/styled'
import GameBoardCell from './GameBoardCell'
import { Tile } from '../ducks/types'

const Row = styled.div`
  display: flex;
`

interface Props {
  tiles: Tile[]
  size: number
}

const start = (length, size): number => (length - size) / 2

const end = (length, size): number => length - (length - size) / 2

const GameBoardRow: React.SFC<Props> = ({ tiles, size }) => (
  <Row>
    {tiles.slice(start(tiles.length, size), end(tiles.length, size)).map(cell => (
      <GameBoardCell key={cell.id} alive={cell.alive} perRow={size} />
    ))}
  </Row>
)

export default GameBoardRow
