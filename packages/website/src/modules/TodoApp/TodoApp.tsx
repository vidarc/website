import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'

import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'

const TodoApp: React.SFC<RouteComponentProps> = () => (
  <div>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    <Link to='/'>Go Back Home</Link>
  </div>
)

export default TodoApp
