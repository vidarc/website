import { Component } from '@stencil/core'

import icon from './undo-solid.svg'

@Component({
  tag: 'ma-undo-icon',
  styleUrl: '../icon.scss',
  shadow: true,
})
export class UndoIcon {
  render() {
    return <span innerHTML={icon} />
  }
}
