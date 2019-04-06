import { Component, ComponentInterface, h, Prop } from '@stencil/core'

@Component({
  tag: 'ma-button',
  styleUrl: 'style.scss',
  shadow: true,
})
export class Button implements ComponentInterface {
  @Prop() type: string = 'button'

  @Prop() color: string = 'primary'

  render() {
    return (
      <button class={this.color} type={this.type}>
        <slot />
      </button>
    )
  }
}
