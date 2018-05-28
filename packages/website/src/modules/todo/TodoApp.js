// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
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
