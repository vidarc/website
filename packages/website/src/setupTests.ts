/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'jest-enzyme'

import { matchers, createSerializer } from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer())
expect.extend(matchers)

jest.mock('shortid', () => ({
  generate: () => 'shortid',
}))

configure({ adapter: new Adapter() })
