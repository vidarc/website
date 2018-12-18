import { connect } from 'react-redux'

import GameBoard from '../components/GameBoard'

const mapStateToProps = ({ gameOfLife }) => ({ tiles: gameOfLife.tiles })

export default connect(mapStateToProps)(GameBoard)
