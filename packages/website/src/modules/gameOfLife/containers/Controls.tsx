import { connect } from 'react-redux'

import Controls from '../components/Controls'
import { State } from '../ducks/reducers'

interface GameOfLifeState {
  gameOfLife: State
}

const mapStateToProps = ({ gameOfLife: { generation, gameOver } }: GameOfLifeState) => ({
  generation,
  gameOver,
})

export default connect(mapStateToProps)(Controls)
