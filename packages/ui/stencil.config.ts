/* eslint-disable import/prefer-default-export */
import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'mattailes',
  globalStyle: 'src/global/app.scss',
  plugins: [sass()],
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null },
    reactOutputTarget({
      componentCorePackage: '@mattailes/ui',
      proxiesFile: '../ui-react/src/components.ts'
    })
  ]
}
