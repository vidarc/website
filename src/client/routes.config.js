// @flow

import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const routes = [
  {
    key: 0,
    path: '/',
    component: Loadable({
      loader: () => import('./modules/Home'),
      loading: Loading,
      delay: 500,
    }),
    exact: true,
  },
]

export default routes
