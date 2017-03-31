import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

describe('Footer', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <Footer />
    ), div)
  })
})

describe('LeftSide', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <LeftSide />
    ), div)
  })
})

describe('RightSide', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <RightSide />
    ), div)
  })
})
