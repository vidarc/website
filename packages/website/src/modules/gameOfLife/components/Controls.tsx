import React, { SyntheticEvent } from 'react'

import styled from '@emotion/styled'
import { PauseIcon, PlayIcon, RestartIcon } from '@mattailes/ui'

import { pauseGameOfLife, restartGameOfLife, startGameOfLife } from '../ducks/actions'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  & > div:not(:last-child) {
    margin-right: 20px;
  }
`

const StyledH3 = styled.h3`
  margin-top: 0;
  text-align: center;
`

const Controls = ({ dispatch, generation, gameOver }) => {
  function handlePlayClick(event: SyntheticEvent) {
    event.preventDefault()
    dispatch(startGameOfLife())
  }

  function handlePauseClick(event: SyntheticEvent) {
    event.preventDefault()
    dispatch(pauseGameOfLife())
  }

  function handleRestartClick(event: SyntheticEvent) {
    event.preventDefault()
    dispatch(restartGameOfLife())
  }

  return (
    <>
      <StyledDiv>
        <PlayIcon onClick={handlePlayClick} />
        <PauseIcon onClick={handlePauseClick} />
        <RestartIcon onClick={handleRestartClick} />
        <div>
          <p>Generation: {generation}</p>
        </div>
      </StyledDiv>
      {gameOver && <StyledH3>☠️ Game Over ☠️</StyledH3>}
    </>
  )
}

export default Controls
