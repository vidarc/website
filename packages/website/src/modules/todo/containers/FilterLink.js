// @flow

import { connect } from 'react-redux'

import TodoLink from '../components/TodoLink'
import actions from '../ducks/actions'

type State = {
  visibilityFilter: string
}

type Props = {
  filter: string
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Function, ownProps: Props) => ({
  onClick: () => {
    dispatch(actions.setVisibilityFilter(ownProps.filter))
  },
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLink)

export default FilterLink
