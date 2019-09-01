import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import GameBoardRowContainer from '../containers/GameBoardRowContainer'

const Board = styled.div`
  border: 1px solid black;
  margin: auto;
  width: 75%;
`

const start = (length: number, size: number): number => (length - size) / 2

const end = (length: number, size: number): number => length - (length - size) / 2

const GameBoard = ({ tiles, size }) => (
  <Board>
    {tiles.slice(start(tiles.length, size), end(tiles.length, size)).map((row, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <GameBoardRowContainer key={index} tiles={row} size={size} />
    ))}
  </Board>
)

GameBoard.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        alive: PropTypes.bool
      })
    )
  ).isRequired,
  size: PropTypes.number.isRequired
}

export default GameBoard
