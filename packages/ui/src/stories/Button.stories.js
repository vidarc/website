import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Button } from '../components/Button'

storiesOf('Component', module).add(
  'simple info',
  withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Button>Click Here</Button>
      ~~~

    `)(() => <Button>Click the "?" mark at top-right to view the info.</Button>),
)
