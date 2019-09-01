import { JSX as Components } from '@mattailes/ui/dist/types/components'
import { h } from '@stencil/core'

interface MaButtonElement extends Components.MaButton {
  children: any
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ma-button': MaButtonElement
      'ma-icons': Components.MaIcons
    }
  }
}
