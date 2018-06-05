// @flow

import * as React from 'react'

import { Button } from '@mattailes/common/components'

export type Props = {
  active: boolean,
  children: React.Node,
  onClick: Function,
}

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>
  }
  return <Button text={children} onClick={onClick} />
}

export default Link
