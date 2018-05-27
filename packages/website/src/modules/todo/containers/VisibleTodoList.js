// @flow

import { connect } from 'react-redux'
import actions from '../ducks/actions'
import TodoList from '../components/TodoList'
import { type Todo, type VisibilityFilter, visibilityFilter } from '../ducks/types'

const getVisibleTodos = (todos: Array<Todo>, { filter }: VisibilityFilter) => {
  switch (filter) {
    case visibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case visibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case visibilityFilter.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = ({ todoReducers }) => ({
  todos: getVisibleTodos(todoReducers.todos, todoReducers.visibilityFilter),
})

const mapDispatchToProps = (dispatch: Function) => ({
  onTodoClick: (id: string) => {
    dispatch(actions.toggleTodo(id))
  },
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
