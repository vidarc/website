// @flow

import { connect } from 'react-redux'

import TodoLink from '../components/TodoLink'
import actions from '../ducks/actions'

import type { VisibilityFilter } from '../ducks/types'

type State = {
  visibilityFilter: string
}

const mapStateToProps = (state: State, ownProps: VisibilityFilter) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (
  dispatch: Function,
  ownProps: VisibilityFilter
) => ({
  onClick: () => {
    dispatch(actions.setVisibilityFilter(ownProps))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLink)

export default FilterLink
