// @flow

import React from 'react'
import Loadable from 'react-loadable'

const Loading = ({ pastDelay }) => {
  if (pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

const routes = [
  {
    key: 0,
    path: '/',
    component: Loadable({
      loader: () => import('./client/modules/home'),
      loading: Loading,
      delay: 200,
    }),
    exact: true,
  },
  {
    key: 1,
    path: '/todo',
    component: Loadable({
      loader: () => import('./client/modules/todo'),
      loading: Loading,
      delay: 200,
    }),
    exact: true,
  },
]

export default routes
