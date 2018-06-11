// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'

export type Props = {
  active: boolean,
  children: React.Node,
  onClick: Function,
}

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>
  }
  return <Button primary text={children} onClick={onClick} />
}

export default Link
