// @flow

import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { decorate } from '@storybook/addon-actions'

import { Button } from '../components/Button'

const pickNative = decorate([args => [args[0].nativeEvent]])

storiesOf('Components|Button', module)
  .addDecorator(withInfo)
  .add(
    'Primary',
    () => (
      <Button
        primary
        {...pickNative.actions('onClick', { clearOnStoryChange: true })}
      >
        I am a Button!
      </Button>
    ),
    {
      info: {
        inline: true,
      },
    },
  )
