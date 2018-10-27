// @flow

import React from 'react'

import { shallow } from 'enzyme'

import TodoLink from '../TodoLink'

describe('TodoLink component', () => {
  let props

  beforeEach(() => {
    props = {
      active: false,
      children: <div>Children</div>,
      onClick: jest.fn(),
    }
  })

  it('should render', () => {
    expect(shallow(<TodoLink {...props} />)).toBeDefined()
  })

  it('should call the onClick function when you click the element', () => {
    shallow(<TodoLink {...props} />).simulate('click')

    expect(props.onClick).toHaveBeenCalled()
  })

  it('should not call onClick when element is active', () => {
    props.active = true

    shallow(<TodoLink {...props} />).simulate('click')

    expect(props.onClick).not.toHaveBeenCalled()
  })
})
