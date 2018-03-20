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

const loadableComponent = path =>
  Loadable({
    loader: () => import(path),
    loading: Loading,
    delay: 200,
  })

const routes = [
  {
    key: 0,
    path: '/',
    component: loadableComponent('./client/modules/home'),
    exact: true,
  },
  {
    key: 1,
    path: '/todo',
    component: loadableComponent('./client/modules/todo'),
    exact: true,
  },
  {
    key: 2,
    path: '/starwars',
    component: loadableComponent('./client/modules/starwars'),
    exact: true,
  },
]

export default routes
