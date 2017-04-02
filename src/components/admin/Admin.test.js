import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './Admin'

describe('Admin', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <Admin />
    ), div)
  })
})
