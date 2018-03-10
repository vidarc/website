// @flow

import React from 'react'
import { Segment } from 'semantic-ui-react'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const TodoApp = () => (
  <Segment raised>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Segment>
)
export default TodoApp
