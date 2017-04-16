import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import Projects, { LinkList } from './'
import Art, { ArtCard, ArtInfo } from './Art'

describe('Projects', () => {
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
      description: 'a description',
    }

    ReactDOM.render((
      <MemoryRouter>
        <LinkList
          image={data.image}
          path={data.path}
          description={data.description}
        />
      </MemoryRouter>
    ), div)
  })
})

describe('Art from the Met', () => {
  it('renders the main page without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <Art />
    ), div)
  })

  it('renders the art card without crashing', () => {
    const div = document.createElement('div')

    const data = {
      id: 'some id',
      title: 'a title',
      department: 'a department',
      artist: 'an artist',
      artist_bio: 'a super intersted bio',
      date: 'date',
      medium: 'steel',
    }

    ReactDOM.render((
      <ArtCard art={data} />
    ), div)
  })

  it('renders some art info without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render((
      <ArtInfo title='some text' content='some content' />
    ), div)
  })
})
