// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../Footer'

describe('Footer component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 1 direct child element, that is of type p', () => {
    expect(wrapper.getElements().length).toBe(1)
    expect(wrapper.getElements()[0].type).toBe('p')
  })

  it('should render 6 children of the p element', () => {
    expect(wrapper.getElements()[0].props.children.length).toBe(6)
  })
})
