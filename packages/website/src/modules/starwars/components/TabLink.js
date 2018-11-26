// @flow

import * as React from 'react'

import { Link } from '@reach/router'

type Props = {
  to: string,
  children: React.Node
}

const TabLink = (props: Props) => {
  const { children } = props

  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => ({ className: isCurrent ? 'active' : null })}
    >
      {children}
    </Link>
  )
}

export default TabLink
