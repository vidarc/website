import { Component, ComponentInterface, h } from '@stencil/core'

import icon from './play-solid.svg'

@Component({
  tag: 'ma-play-icon',
  styleUrl: '../icon.scss',
  shadow: true,
})
export class PlayIcon implements ComponentInterface {
  render() {
    return <span innerHTML={icon} />
  }
}
