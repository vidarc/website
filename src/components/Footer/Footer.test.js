import React from 'react'
import ReactDOM from 'react-dom'
import Footer, { LeftSide, RightSide } from './'

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Footer />, div)
  })
})

describe('LeftSide', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<LeftSide />, div)
  })
})

describe('RightSide', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<RightSide />, div)
  })
})
