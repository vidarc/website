import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'

addDecorator(
  withOptions({
    name: '@mattailes/ui',
    sortStoriesByKind: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  })
)

const req = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
