/* eslint-disable import/prefer-default-export */
/** @jsx h */
import { Component, h, ComponentInterface, Prop, State, getAssetPath } from '@stencil/core'

@Component({
  tag: 'ma-icons',
  styleUrl: 'icon.scss',
  assetsDirs: ['svg'],
  shadow: {
    delegatesFocus: true,
  },
})
export class MaIcons implements ComponentInterface {
  @Prop() name: string

  @State() svg: string

  async connectedCallback() {
    const path = getAssetPath(`svg/${this.name}.svg`)
    const response = await fetch(path)
    this.svg = await response.text()
  }

  render() {
    return <div innerHTML={this.svg} />
  }
}
