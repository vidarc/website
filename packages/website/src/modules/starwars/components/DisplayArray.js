// @flow

import * as React from 'react'

import { Link } from '@reach/router'

type Props = {
  array: Array<any>,
  url: string
}

export default ({ array, url }: Props) => array
  .map(({ id, name }) => (
    <Link to={url + id} key={id}>
      {name}
    </Link>
  ))
  .reduce((prev, curr) => [prev, ', ', curr])
