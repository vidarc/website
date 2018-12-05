import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'jest-enzyme'

import serializer, { matchers } from 'jest-emotion'

expect.addSnapshotSerializer(serializer)
expect.extend(matchers)

jest.mock('shortid', () => ({
  generate: () => 'shortid',
}))

configure({ adapter: new Adapter() })
