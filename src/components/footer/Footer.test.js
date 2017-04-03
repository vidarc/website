import React from 'react'
import ReactDOM from 'react-dom'
import Footer, { LeftSide, RightSide} from './'

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
