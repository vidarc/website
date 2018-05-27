// @flow

import * as React from 'react'
import PropTypes from 'prop-types'

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

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
