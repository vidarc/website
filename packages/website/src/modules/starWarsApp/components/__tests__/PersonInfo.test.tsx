import { Person } from '@mattailes/types'
import { shallow } from 'enzyme'

import PersonInfo from '../PersonInfo'

describe('PersonInfo component', () => {
  it('renders without crashing', () => {
    const data: Person = {
      id: 1,
      homeworld: 'homeworld',
      species: [],
      films: [],
      eye_color: 'eye',
      gender: 'male',
      height: 'height',
      hair_color: 'hair',
      starships: [],
      birth_year: '1999',
      name: 'name',
      mass: 'mass',
      vehicles: [],
      skin_color: '',
    }

    expect(shallow(<PersonInfo {...data} />)).toBeTruthy()
  })
})
