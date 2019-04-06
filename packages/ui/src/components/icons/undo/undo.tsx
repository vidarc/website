import { Component, ComponentInterface, h } from '@stencil/core'

import icon from './undo-solid.svg'

@Component({
  tag: 'ma-undo-icon',
  styleUrl: '../icon.scss',
  shadow: true,
})
export class UndoIcon implements ComponentInterface {
  render() {
    return <span innerHTML={icon} />
  }
}
