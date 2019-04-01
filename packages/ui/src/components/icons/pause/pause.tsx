import { Component } from '@stencil/core'

import icon from './pause-solid.svg'

@Component({
  tag: 'ma-pause-icon',
  styleUrl: '../icon.scss',
  shadow: true,
})
export class PauseIcon {
  render() {
    return <span innerHTML={icon} />
  }
}
