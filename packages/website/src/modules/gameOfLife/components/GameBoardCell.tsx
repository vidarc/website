import React from 'react'

import styled from '@emotion/styled'

interface CellProps {
  perRow: number
  alive: boolean
  onClick: (event: any) => void
}

const StyledCell = styled.div`
  border: 1px solid black;
  width: ${(props: CellProps) => ((1 / props.perRow) * 100).toFixed(2)}%;

  &::after {
    content: '';
    background-color: ${(props: CellProps) => (props.alive ? 'blue' : 'white')};
    display: block;
    padding-bottom: 100%;
  }
`

const GameBoardCell: React.SFC<CellProps> = props => <StyledCell {...props} />

export default GameBoardCell
