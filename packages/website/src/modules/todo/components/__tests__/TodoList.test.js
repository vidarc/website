// @flow

import React from 'react'

import { shallow } from 'enzyme'

import TodoList, { type Props } from '../TodoList'

describe('TodoList component', () => {
  const props: Props = {
    todos: [
      {
        id: 'shortid01',
        text: 'hello',
        completed: false,
      },
      {
        id: 'shortid02',
        text: 'another todo',
        completed: true,
      },
    ],
    onTodoClick: jest.fn(),
  }

  it('renders without crashing', () => {
    expect(shallow(<TodoList {...props} />)).toBeDefined()
  })

  it('calls onTodoClick when element is clicked', () => {
    shallow(<TodoList {...props} />)
      .childAt(0)
      .simulate('click')

    expect(props.onTodoClick).toHaveBeenCalled()
  })
})
