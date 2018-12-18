import React from 'react'

import styled from '@emotion/styled'

interface CellProps {
  perRow: number
  alive: boolean
}

export default class GameBoardCell extends React.PureComponent<
  CellProps,
  null
> {
  constructor(props) {
    super(props)
  }

  render() {
    const StyledCell = styled.div`
      border: 1px solid black;
      width: ${((1 / this.props.perRow) * 100).toFixed(2)}%;

      &::after {
        content: '';
        background-color: ${this.props.alive ? 'blue' : 'white'};
        display: block;
        padding-bottom: 100%;
      }
    `

    return <StyledCell />
  }
}
