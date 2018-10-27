// @flow

import * as React from 'react'

const Loading = ({ pastDelay }: { pastDelay: boolean }) => {
  if (pastDelay) {
    return <div>Loading...</div>
  }
  return null
}

export default Loading
