import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import BlogPost from './BlogPost'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Blog />
  ), div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')

  let data = {
    title: 'A title',
    date: 'A date',
    body: 'A body'
  }

  ReactDOM.render((
    <BlogPost post={data} />
  ), div)
})
