// @flow

import * as React from 'react'
import MenuItem from './MenuItem'

export type MenuProps = {
  children: React.ChildrenArray<React.Element<typeof MenuItem>>,
}

const Menu = ({ children }: MenuProps) => <div>{children}</div>

export default Menu
