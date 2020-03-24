import React, { SyntheticEvent } from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import { toggleTileState } from '../ducks/actions'
import GameBoardCell from './GameBoardCell'

const Row = styled.div`
  display: flex;
`

const start = (length: number, size: number): number => (length - size) / 2

const end = (length: number, size: number): number => length - (length - size) / 2

const GameBoardRow = ({ tiles, size, dispatch }) => {
  const handleClick = (event: SyntheticEvent<HTMLElement>): void => {
    const id = parseInt(event.currentTarget.dataset.id, 10)
    dispatch(toggleTileState(id))
  }

  return (
    <Row>
      {tiles.slice(start(tiles.length, size), end(tiles.length, size)).map((cell) => (
        <GameBoardCell
          key={cell.id}
          alive={cell.alive}
          perRow={size}
          data-id={cell.id}
          onClick={handleClick}
        />
      ))}
    </Row>
  )
}

GameBoardRow.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      alive: PropTypes.bool,
    })
  ).isRequired,
  size: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default GameBoardRow
