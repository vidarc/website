import React from 'react'

import { RouteComponentProps } from '@reach/router'

interface Props extends RouteComponentProps {}

const GameOfLife = (props: Props) => (
  <>
    <h2>Conway's Game of Life</h2>
    <small>
      About:{' '}
      <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
        Wikiepdia entry
      </a>
    </small>
  </>
)

export default GameOfLife
