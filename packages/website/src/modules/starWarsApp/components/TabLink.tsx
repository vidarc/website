import * as React from 'react'

import { Link } from '@reach/router'

interface Props {
  to: string
  children: React.ReactChild
}

const TabLink = (props: Props) => {
  const { children } = props

  return (
    <Link
      {...props}
      // tslint:disable-next-line:jsx-no-lambda
      getProps={({ isCurrent }) => ({ className: isCurrent ? 'active' : null })}
    >
      {children}
    </Link>
  )
}

export default TabLink
