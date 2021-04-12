/* eslint-disable import/prefer-default-export */
import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'mattailes',
  globalStyle: 'src/global/app.scss',
  plugins: [sass()],
  outputTargets: [{ type: 'dist' }, { type: 'www', serviceWorker: null }],
}
