import React from 'react'

import { mount } from 'enzyme'

import DisplayArray from '../DisplayArray'

describe('DisplayArray component', () => {
  it('renders without crashing', () => {
    const array = []

    expect(mount(<DisplayArray array={array} url='some/url/' />)).toBeTruthy()
  })

  it('renders when there is data in array', () => {
    const array = [
      {
        id: 1,
        name: 'some name',
      },
      {
        id: 2,
        title: 'some other name',
      },
    ]

    expect(mount(<DisplayArray array={array} url='some/url' />)).toBeTruthy()
  })
})
