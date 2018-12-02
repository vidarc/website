import React from 'react'

import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import FlexContainer from '../FlexContainer'

describe('FlexContainer', () => {
  it('renders without crashing', () => {
    expect(mount(<FlexContainer />)).toBeTruthy()
  })

  it('matches the snapshot', () => {
    expect(renderer.create(<FlexContainer />).toJSON()).toMatchSnapshot()
  })

  it('matches the snapshot when direction is specified', () => {
    expect(
      renderer.create(<FlexContainer direction='column' />).toJSON(),
    ).toMatchSnapshot()
  })
})
