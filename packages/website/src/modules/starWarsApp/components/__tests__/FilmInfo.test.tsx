import React from 'react'

import { Film } from '@mattailes/types'
import { shallow } from 'enzyme'

import FilmInfo from '../FilmInfo'

describe('FilmInfo component', () => {
  it('renders without crashing', () => {
    const data: Film = {
      id: 1,
      title: 'some title',
      episode_id: 1,
      opening_crawl: 'opening crawl',
      director: 'director',
      producer: 'producer',
      release_date: '12/25/2018',
      species: [],
      starships: [],
      vehicles: [],
      characters: [],
      planets: [],
    }

    expect(shallow(<FilmInfo {...data} />)).toBeTruthy()
  })
})
