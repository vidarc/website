// @flow

import asyncComponent from './components/AsyncComponent'

const Home = asyncComponent(() => import('./modules/Home'))

const routes = [
  {
    key: 0,
    path: '/',
    component: Home,
    exact: true,
  },
]

export default routes
