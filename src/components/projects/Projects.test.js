import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import Projects from './Projects'
import LinkList from './LinkList'
import Art from './art/Art'
import ArtCard from './art/ArtCard'

describe('Projects', function() {
  it('renders main page without crashing', () => {
    const div = document.createElement('div')
    const routes = []

    ReactDOM.render((
      <MemoryRouter>
        <Projects routes={routes} />
      </MemoryRouter>
    ), div)
  })

  it('renders a listed link without crashing', () => {
    const div = document.createElement('div')
    const data = {
      image: 'image-link',
      path: '/a/url/path',
      description: 'a description'
    }

    ReactDOM.render((
      <MemoryRouter>
        <LinkList link={data} />
      </MemoryRouter>
    ), div)
  })
})

describe('Art from the Met', function() {
  if('renders the main page without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <Art />
    ), div)
  })

  it('renders the art card without crashing', () => {
    const div = document.createElement('div')

    global.fetch = jest.fn().mockImplementation(() => {
      const api = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return { webImageUrl: 'url/to/an/image' }
          }
        })
      })
      return api
    })
    const data = {
      id: 'some id',
      image: 'an image',
      title: 'a title',
      department: 'a department',
      artist: 'an artist',
      artist_bio: 'a super intersted bio',
      date: 'date',
      medium: 'steel'
    }

    ReactDOM.render((
      <ArtCard art={data} />
    ), div)
  })
})
