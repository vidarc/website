// @flow

import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const TodoApp = () => (
  <div>
    <Segment raised>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Segment>
    <Link to='/'>Go Back Home</Link>
  </div>
)
export default TodoApp
