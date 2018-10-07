// @flow

import * as React from 'react'
import Loadable from 'react-loadable'

const Loading = ({ pastDelay }: { pastDelay: boolean }) => {
  if (pastDelay) {
    return <div>Loading...</div>
  }
  return null
}

const loadableComponent = ({ loader }: { loader: Function }) => Loadable({
  loader,
  loading: Loading,
  delay: 200,
})

const routes = [
  {
    key: 0,
    path: '/',
    component: loadableComponent({ loader: () => import('./modules/home') }),
    exact: true,
  },
  {
    key: 1,
    path: '/todo',
    component: loadableComponent({ loader: () => import('./modules/todo') }),
    exact: true,
  },
  {
    key: 2,
    path: '/starwars',
    component: loadableComponent({
      loader: () => import('./modules/starwars'),
    }),
    exact: true,
  },
]

export default routes
