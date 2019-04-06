import { JSX as Components } from '@mattailes/ui/dist/types/components'
import { h } from '@stencil/core'

interface MaButtonElement extends Components.MaButton {
  children: any
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ma-button': MaButtonElement
      'ma-pause-icon': Components.MaPauseIcon
      'ma-play-icon': Components.MaPlayIcon
      'ma-undo-icon': Components.MaUndoIcon
    }
  }
}
