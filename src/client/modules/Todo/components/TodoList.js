// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <List bulleted>{todos.map((todo, index) => <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />)}</List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
