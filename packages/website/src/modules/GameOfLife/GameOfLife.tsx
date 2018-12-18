import React from 'react'

import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'

import actions from './ducks/actions'
import GameContainer from './containers/GameContainer'

interface Props extends RouteComponentProps {
  dispatch: Function
}

class GameOfLife extends React.Component<Props, null> {
  componentDidMount() {
    this.props.dispatch(actions.initGame())
  }

  render() {
    return (
      <>
        <h2>Conway's Game of Life</h2>
        <small>
          About:{' '}
          <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
            Wikiepdia entry
          </a>
        </small>
        <hr />
        <GameContainer />
      </>
    )
  }
}

export default connect()(GameOfLife)
