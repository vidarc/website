// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'

export type Props = {
  active: boolean,
  children: React.Node,
  onClick: Function
}

const Link = ({ active, children, onClick }: Props) => (active ? (
  <span>{children}</span>
) : (
  <Button primary text={children} onClick={onClick} />
))

export default Link
