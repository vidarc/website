// @flow

import * as React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

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
    <List.Item onClick={onClick} style={style}>
      {text}
    </List.Item>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
