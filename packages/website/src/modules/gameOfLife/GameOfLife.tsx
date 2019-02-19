import React, { useEffect, useState } from 'react'

import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'

import { initGame } from './ducks/actions'
import { Controls, GameContainer } from './containers'

interface Props extends RouteComponentProps {
  dispatch: Function
}

const GameOfLife: React.FunctionComponent<Props> = ({ dispatch }) => {
  const [size, setSize] = useState(25)

  useEffect(() => {
    dispatch(initGame(size))
  })

  return (
    <>
      <h2>Conway's Game of Life</h2>
      <small>
        About: <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Wikiepdia entry</a>
      </small>
      <hr />
      <Controls />
      <GameContainer size={size} />
    </>
  )
}

export default connect()(GameOfLife)
