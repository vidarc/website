import * as React from 'react'

export interface Props {
  active: boolean
  children: React.ReactChild
  onClick: () => void
}

const Link = ({ active, children, onClick }: Props) =>
  active ? <span>{children}</span> : <button onClick={onClick}>{children}</button>

export default Link
