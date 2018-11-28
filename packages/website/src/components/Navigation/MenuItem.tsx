import { Link } from '@reach/router'
import * as React from 'react'

export interface MenuItemProps {
  children: string
  to: string
}

const MenuItem: React.SFC<MenuItemProps> = ({ children, to }) => (
  <Link to={to}>{children}</Link>
)

export default MenuItem
