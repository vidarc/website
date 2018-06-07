// @flow

import * as React from 'react'

export type Props = {
  onClick: Function,
  completed: boolean,
  text: string,
}

const Todo = ({ onClick, completed, text }: Props) => {
  const style = {
    textDecoration: completed ? 'line-through' : 'none',
    cursor: 'pointer',
  }

  return (
    <li onClick={onClick} style={style}>
      {text}
    </li>
  )
}

export default Todo
