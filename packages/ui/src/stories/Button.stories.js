import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from '../components/Button/Button'

storiesOf('Button', module).add(
  'Default',
  withInfo(`
      A simple Button component
      ~~~js
      <Button>Click Here</Button>
      ~~~
    `)(() => <Button primary>I am a Button</Button>),
)
