import React from 'react'

import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Todo, { Props } from '../Todo'

describe('Todo component', () => {
  const props: Props = {
    completed: false,
    onClick: jest.fn(),
    text: 'todo text'
  }

  it('should render correctly when not completed', () => {
    props.completed = false

    const actual = renderer.create(<Todo {...props} />).toJSON()

    expect(actual).toBeDefined()
    expect(actual).toHaveStyleRule('cursor', 'pointer')
    expect(actual).toHaveStyleRule('text-decoration', 'none')
  })

  it('should render correctly when completed', () => {
    props.completed = true

    const actual = renderer.create(<Todo {...props} />).toJSON()

    expect(actual).toBeDefined()
    expect(actual).toHaveStyleRule('cursor', 'pointer')
    expect(actual).toHaveStyleRule('text-decoration', 'line-through')
  })

  it('should have the correct text value', () => {
    const actual = mount(<Todo {...props} />)

    expect(actual).toIncludeText('todo text')
  })

  it('calls the function when List.Item is clicked', () => {
    const actual = mount(<Todo {...props} />)

    actual.simulate('click')

    expect(props.onClick).toHaveBeenCalled()
  })
})
