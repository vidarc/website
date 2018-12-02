import * as React from 'react'

import Todo from './Todo'

import { Todo as TodoProp } from '../ducks/types'

export interface Props {
  todos: TodoProp[]
  onTodoClick: (id: string) => void
}

const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    {todos.map(todo => (
      // tslint:disable-next-line:jsx-no-lambda
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList
