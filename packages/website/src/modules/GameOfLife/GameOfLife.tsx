import React from 'react'

import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'

import { initGame, processGeneration } from './ducks/actions'
import GameContainer from './containers/GameContainer'

interface Props extends RouteComponentProps {
  dispatch: Function
}

class GameOfLife extends React.Component<Props, null> {
  componentDidMount() {
    this.props.dispatch(initGame())

    setInterval(() => this.props.dispatch(processGeneration()), 1000)
  }

  render() {
    return (
      <>
        <h2>Conway's Game of Life</h2>
        <small>
          About: <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Wikiepdia entry</a>
        </small>
        <hr />
        <GameContainer {...this.state} />
      </>
    )
  }
}

export default connect()(GameOfLife)
