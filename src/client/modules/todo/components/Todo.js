// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text }) => {
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
