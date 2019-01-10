import { connect } from 'react-redux'

import Controls from '../components/Controls'

const mapStateToProps = ({ gameOfLife }) => ({ generation: gameOfLife.generation })

export default connect(mapStateToProps)(Controls)
