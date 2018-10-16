// @flow

import * as React from 'react'
import Loadable from 'react-loadable'

const Loading = ({ pastDelay }: { pastDelay: boolean }) => {
  if (pastDelay) {
    return <div>Loading...</div>
  }
  return null
}

export const loadableComponent = ({ loader }: { loader: Function }) => Loadable({
  loader,
  loading: Loading,
  delay: 200,
})

export default Loading
