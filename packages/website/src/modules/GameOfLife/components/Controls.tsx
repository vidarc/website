import React, { SyntheticEvent } from 'react'

import { PauseIcon, PlayIcon } from '@mattailes/ui'

import { startGameOfLife } from '../ducks/actions'

const Controls = ({ dispatch }) => {
  function handleClick(event: SyntheticEvent) {
    event.preventDefault()
    dispatch(startGameOfLife())
  }

  return (
    <div>
      <a onClick={handleClick}>Click Me</a>
      <PlayIcon />
      <PauseIcon />
    </div>
  )
}

export default Controls
