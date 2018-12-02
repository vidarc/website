import { connect } from 'react-redux'

import actions from '../ducks/actions'
import TodoLink from '../components/TodoLink'
import { VisibilityFilter } from '../ducks/types'

interface State {
  visibilityFilter: string
}

const mapStateToProps = (state: State, ownProps: VisibilityFilter) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (
  dispatch: (string) => void,
  ownProps: VisibilityFilter,
) => ({
  onClick: () => {
    dispatch(actions.setVisibilityFilter(ownProps))
  },
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLink)

export default FilterLink
