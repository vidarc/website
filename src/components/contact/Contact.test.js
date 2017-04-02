import React from 'react'
import ReactDOM from 'react-dom'
import Contact from './Contact'

describe('Contact', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <Contact />
    ), div)
  })
})
