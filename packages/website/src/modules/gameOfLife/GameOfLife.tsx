import React, { Component } from 'react'

import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'

import { initGame } from './ducks/actions'
import { Controls, GameContainer } from './containers'

interface Props extends RouteComponentProps {
  dispatch: Function
}

class GameOfLife extends Component<Props, null> {
  componentDidMount() {
    this.props.dispatch(initGame())
  }

  render() {
    return (
      <>
        <h2>Conway's Game of Life</h2>
        <small>
          About: <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Wikiepdia entry</a>
        </small>
        <hr />
        <Controls />
        <GameContainer {...this.state} />
      </>
    )
  }
}

export default connect()(GameOfLife)
