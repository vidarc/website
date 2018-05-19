// @flow

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import TodoLink from '../components/TodoLink'
import { type VisibilityFilter } from '../constants'

type State = {
  visibilityFilter: VisibilityFilter,
}

type Props = {
  filter: VisibilityFilter,
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Function, ownProps: Props) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(TodoLink)

export default FilterLink
