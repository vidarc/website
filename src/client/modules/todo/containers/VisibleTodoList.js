// @flow

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { type Todo, type VisibilityFilter } from '../constants'

const getVisibleTodos = (todos: Array<Todo>, filter: VisibilityFilter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = ({ todoReducers }) => ({
  todos: getVisibleTodos(todoReducers.todos, todoReducers.visibilityFilter),
})

const mapDispatchToProps = (dispatch: Function) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
