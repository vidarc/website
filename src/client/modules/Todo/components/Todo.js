// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text }) => (
  <List.Item onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </List.Item>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
