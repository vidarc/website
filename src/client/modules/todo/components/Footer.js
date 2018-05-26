// @flow

import * as React from 'react'

import FilterLink from '../containers/FilterLink'
import { visibilityFilter } from '../ducks/types'

const Footer = () => (
  <p>
    Show: <FilterLink filter={visibilityFilter.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={visibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={visibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)
export default Footer
