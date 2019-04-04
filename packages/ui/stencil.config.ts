import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import svgo from 'rollup-plugin-svgo'

export const config: Config = {
  namespace: 'mattailes',
  plugins: [sass(), svgo()],
  outputTargets: [{ type: 'dist' }, { type: 'www', serviceWorker: null }],
}
