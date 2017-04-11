import React from 'react'
import ReactDOM from 'react-dom'
import Blog, { BlogPost } from './'

describe('Blog', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <Blog />
    ), div)
  })
})

describe('BlogPost', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <BlogPost title='A title' date='A date' body='A body' />
    ), div)
  })
})
