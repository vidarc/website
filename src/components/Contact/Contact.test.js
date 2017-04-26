import React from 'react'
import Shallow from 'react-test-renderer/shallow'
import Contact from './'

describe('Contact', () => {
  it('renders without crashing', () => {
    const renderer = Shallow.createRenderer()

    const component = renderer.render(
      <Contact />,
    )

    expect(component).toMatchSnapshot()
  })
})
