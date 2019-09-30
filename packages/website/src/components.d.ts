import { JSX as Components } from '@mattailes/ui/dist/types/components'
import { h } from '@stencil/core'
import { JSXBase } from '@stencil/core/dist/declarations'

interface MaButtonElement extends Components.MaButton {
  children: any
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ma-button': MaButtonElement & JSXBase.HTMLAttributes<HTMLMaButtonElement>
      'ma-icons': Components.MaIcons & JSXBase.HTMLAttributes<HTMLMaIconsElement>
    }
  }
}
