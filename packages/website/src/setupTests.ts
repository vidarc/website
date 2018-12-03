import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'jest-enzyme'

import * as emotion from 'emotion'
import { createSerializer } from 'jest-emotion'

expect.addSnapshotSerializer(createSerializer(emotion))

jest.mock('shortid', () => ({
  generate: () => 'shortid',
}))

configure({ adapter: new Adapter() })
