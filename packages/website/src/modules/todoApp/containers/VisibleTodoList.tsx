import { connect } from 'react-redux'

import actions from '../ducks/actions'
import TodoList from '../components/TodoList'
import { Todo, VisibilityFilter } from '../ducks/types'

const getVisibleTodos = (todos: Todo[], { filter }: VisibilityFilter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed)
    case 'SHOW_ALL':
      return todos
    default:
      return todos
  }
}

const mapStateToProps = ({ todoReducers }) => ({
  todos: getVisibleTodos(todoReducers.todos, todoReducers.visibilityFilter),
})

const mapDispatchToProps = (dispatch: (string) => void) => ({
  onTodoClick: (id: string) => {
    dispatch(actions.toggleTodo(id))
  },
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
