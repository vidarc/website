// @flow

import * as React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

import Todo from './Todo'
import { type Todo as TodoProp } from '../ducks/types'

export type Props = {
  todos: Array<TodoProp>,
  onTodoClick: Function,
}

const TodoList = ({ todos, onTodoClick }: Props) => (
  <List bulleted>{todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}</List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
