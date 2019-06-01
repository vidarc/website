import { Component, ComponentInterface, h } from '@stencil/core'

import icon from './pause-solid.svg'

@Component({
  tag: 'ma-pause-icon',
  styleUrl: '../icon.scss',
  shadow: true,
})
export class PauseIcon implements ComponentInterface {
  render() {
    return <img src={icon} />
  }
}
