import React from 'react'

import styled from '@emotion/styled'
import GameBoardCell from './GameBoardCell'
import { Tile } from '../ducks/types'

const Row = styled.div`
  display: flex;
`

interface Props {
  tiles: Tile[]
}

const GameBoardRow: React.SFC<Props> = ({ tiles }) => (
  <Row>
    {tiles.map(cell => (
      <GameBoardCell key={cell.id} alive={cell.alive} perRow={tiles.length} />
    ))}
  </Row>
)

export default GameBoardRow
