// @flow

import * as React from 'react'

type Props = {
  data: Array<string>,
}

const ArrayToList = ({ data }: Props) => <ul>{data.map(string => <li>{string}</li>)}</ul>

export default ArrayToList
