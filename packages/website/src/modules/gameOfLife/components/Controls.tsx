import React, { SyntheticEvent } from 'react'

import styled from '@emotion/styled'
import { PauseIcon, PlayIcon } from '@mattailes/ui'

import { pauseGameOfLife, startGameOfLife } from '../ducks/actions'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  & > div:not(:last-child) {
    margin-right: 20px;
  }
`

const Controls = ({ dispatch, generation }) => {
  function handlePlayClick(event: SyntheticEvent) {
    event.preventDefault()
    dispatch(startGameOfLife())
  }

  function handlePauseClick(event: SyntheticEvent) {
    event.preventDefault()
    dispatch(pauseGameOfLife())
  }

  return (
    <StyledDiv>
      <PlayIcon onClick={handlePlayClick} />
      <PauseIcon onClick={handlePauseClick} />
      <div>
        <p>Generation: {generation}</p>
      </div>
    </StyledDiv>
  )
}

export default Controls
