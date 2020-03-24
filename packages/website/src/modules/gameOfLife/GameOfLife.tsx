import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { initGame } from './ducks/actions'
import { Controls, GameContainer } from './containers'

interface Props extends RouteComponentProps {}

const GameOfLife = ({ onInitGame }) => {
  const [size] = useState(25)

  useEffect(() => {
    onInitGame(size)
  })

  return (
    <>
      <h2 id="game-of-life-home">Conway&apos;s Game of Life</h2>
      <small>
        About: <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Wikiepdia entry</a>
      </small>
      <hr />
      <Controls />
      <GameContainer size={size} />
    </>
  )
}

GameOfLife.propTypes = {
  onInitGame: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onInitGame: (size: number) => dispatch(initGame(size)),
})

const mapStateToProps = (_state, ownProps: Props) => ownProps

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife)
