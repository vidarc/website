import * as React from 'react'

import FilterLink from '../containers/FilterLink'
import { types } from '../ducks/types'

const Footer = () => (
  <p>
    Show: <FilterLink filter={types.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={types.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={types.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

export default Footer
