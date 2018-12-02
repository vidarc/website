import * as React from 'react'

import { Button } from '@mattailes/ui'

export interface Props {
  active: boolean
  children: React.ReactChild
  onClick: () => void
}

const Link = ({ active, children, onClick }: Props) =>
  active ? (
    <span>{children}</span>
  ) : (
    <Button primary onClick={onClick}>
      {children}
    </Button>
  )

export default Link
