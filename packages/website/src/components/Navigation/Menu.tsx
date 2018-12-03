import * as React from 'react'

import MenuItem from './MenuItem'

export interface MenuProps {
  children: React.ReactChild[]
}

const Menu: React.SFC<MenuProps> = ({ children }) => <div>{children}</div>

export default Menu
