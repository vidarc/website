import React from 'react'
import ReactDOM from 'react-dom'
import About from './About'

describe('About', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <About />
    ), div)
  })
})
