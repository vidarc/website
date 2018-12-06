import * as React from 'react'

export interface MenuProps {
  children: React.ReactChild[]
}

const Menu: React.SFC<MenuProps> = ({ children }) => <div>{children}</div>

export default Menu
