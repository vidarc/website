// @flow

import * as React from 'react'
import { Link } from '@reach/router'

export type MenuItemProps = {
  children: string,
  to: string
}

const MenuItem = ({ children, to }: MenuItemProps) => (
  <Link to={to}>{children}</Link>
)

export default MenuItem
