// @flow

import React from 'react'
import Loadable from 'react-loadable'

const Loading = ({ pastDelay }) => {
  if (pastDelay) {
    return <div>Loading...</div>
  }
  return null
}

const loadableComponent = (opts: Object) =>
  Loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 200,
      },
      opts,
    ),
  )

const routes = [
  {
    key: 0,
    path: '/',
    component: loadableComponent({ loader: () => import('./client/modules/home') }),
    exact: true,
  },
  {
    key: 1,
    path: '/todo',
    component: loadableComponent({ loader: () => import('./client/modules/todo') }),
    exact: true,
  },
  {
    key: 2,
    path: '/starwars',
    component: loadableComponent({ loader: () => import('./client/modules/starwars') }),
    exact: true,
  },
]

export default routes
