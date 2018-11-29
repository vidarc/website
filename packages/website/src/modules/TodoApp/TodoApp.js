// @flow

import * as React from 'react'
import { Link } from '@reach/router'

import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'

const TodoApp = () => (
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
