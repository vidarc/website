import * as React from 'react'

import { Link } from '@reach/router'

const DisplayArray = ({ array, url }) =>
  array
    .map(({ id, name, title }) => (
      <Link to={url + id} key={id}>
        {name || title}
      </Link>
    ))
    .reduce((prev, next) => (prev.length > 0 ? [prev, ', ', next] : [next]), [])

export default DisplayArray
