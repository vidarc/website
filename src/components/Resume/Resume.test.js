import React from 'react'
import ReactDOM from 'react-dom'
import Resume from './'

describe('Resume', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Resume />, div)
  })
})
