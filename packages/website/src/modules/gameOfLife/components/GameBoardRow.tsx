import React, { SyntheticEvent } from 'react'

import styled from '@emotion/styled'
import { toggleTileState } from '../ducks/actions'
import GameBoardCell from './GameBoardCell'
import { Tile } from '../ducks/types'

const Row = styled.div`
  display: flex;
`

interface Props {
  x: number
  tiles: Tile[]
  size: number
  dispatch: (action) => void
}

const start = (length, size): number => (length - size) / 2

const end = (length, size): number => length - (length - size) / 2

const GameBoardRow: React.SFC<Props> = ({ tiles, size, dispatch }) => {
  const handleClick = (event: SyntheticEvent<HTMLElement>): void => {
    const id = parseInt(event.currentTarget.dataset.id, 10)
    dispatch(toggleTileState(id))
  }

  return (
    <Row>
      {tiles.slice(start(tiles.length, size), end(tiles.length, size)).map(cell => (
        <GameBoardCell key={cell.id} alive={cell.alive} perRow={size} data-id={cell.id} onClick={handleClick} />
      ))}
    </Row>
  )
}

export default GameBoardRow
