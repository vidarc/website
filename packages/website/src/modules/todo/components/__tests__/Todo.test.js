// @flow

import React from 'react'

import { mount } from 'enzyme'

import Todo, { type Props } from '../Todo'

describe('Todo component', () => {
  const props: Props = {
    onClick: jest.fn(),
    completed: false,
    text: 'todo text',
  }

  it('should render correctly when not completed', () => {
    props.completed = false

    const actual = mount(<Todo {...props} />)

    expect(actual).toBeDefined()
    expect(actual.find('li').prop('style')).toEqual({
      cursor: 'pointer',
      textDecoration: 'none',
    })
    expect(actual.find('li').text()).toEqual('todo text')
  })

  it('should render correctly when completed', () => {
    props.completed = true

    const actual = mount(<Todo {...props} />)

    expect(actual).toBeDefined()
    expect(actual.find('li').prop('style')).toEqual({
      cursor: 'pointer',
      textDecoration: 'line-through',
    })
    expect(actual.find('li').text()).toEqual('todo text')
  })

  it('calls the function when List.Item is clicked', () => {
    const actual = mount(<Todo {...props} />)

    actual.simulate('click')

    expect(props.onClick).toHaveBeenCalled()
  })
})
