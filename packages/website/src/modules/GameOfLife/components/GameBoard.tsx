import React from 'react'

import styled from '@emotion/styled'

const rows = []
for (let i = 0; i < 50; i += 1) {
  rows.push(i)
}
const columns = []
for (let i = 0; i < 50; i += 1) {
  columns.push(i)
}

const Board = styled.div`
  border: 1px solid black;
  margin: auto;
  width: 75%;
`

const Row = styled.div`
  display: flex;
`

interface CellProps {
  perRow: number
  alive: boolean
}
const Cell = styled.div`
  border: 1px solid black;
  width: ${(props: CellProps) => `${((1 / props.perRow) * 100).toFixed(2)}%`};

  &::after {
    content: '';
    background-color: ${(props: CellProps) => (props.alive ? 'blue' : 'white')};
    display: block;
    padding-bottom: 100%;
  }
`

const GameBoard = () => (
  <Board>
    {rows.map(number => (
      <Row key={number}>
        {columns.map(number => (
          <Cell
            perRow={columns.length}
            alive={Math.floor(Math.random() * 10) > 5}
          />
        ))}
      </Row>
    ))}
  </Board>
)

export default GameBoard
