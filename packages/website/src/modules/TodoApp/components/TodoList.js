// @flow

import * as React from 'react'

import Todo from './Todo'

import { type Todo as TodoProp } from '../ducks/types'

export type Props = {
  todos: Array<TodoProp>,
  onTodoClick: Function
}

const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList
