// @flow

import * as React from 'react'
import { List } from 'semantic-ui-react'

type Props = {
  data: Array<string>,
}

const ArrayToList = ({ data }: Props) => <List>{data.map(string => <List.Item>{string}</List.Item>)}</List>

export default ArrayToList
