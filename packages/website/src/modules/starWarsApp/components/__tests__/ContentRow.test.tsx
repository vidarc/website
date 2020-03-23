import React from 'react'

import { mount } from 'enzyme'

import ContentRow from '../ContentRow'

describe('ContentRow component', () => {
  it('renders without crashing', () => {
    expect(
      mount(
        <ContentRow title="Title">
          <p>Hello</p>
        </ContentRow>
      )
    ).toBeTruthy()
  })
})
