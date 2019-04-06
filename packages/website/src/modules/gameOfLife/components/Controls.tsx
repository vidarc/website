import React from 'react'

import styled from '@emotion/styled'

import { pauseGameOfLife, restartGameOfLife, startGameOfLife } from '../ducks/actions'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

const StyledH3 = styled.h3`
  margin-top: 0;
  text-align: center;
`

const Controls = ({ dispatch, generation, gameOver }) => {
  const handlePlayClick = () => dispatch(startGameOfLife())

  const handlePauseClick = () => dispatch(pauseGameOfLife())

  const handleRestartClick = () => dispatch(restartGameOfLife())

  return (
    <>
      <StyledDiv>
        <ma-play-icon onClick={handlePlayClick} />
        <ma-pause-icon onClick={handlePauseClick} />
        <ma-undo-icon onClick={handleRestartClick} />
        <div>
          <p>Generation: {generation}</p>
        </div>
      </StyledDiv>
      {gameOver && <StyledH3>☠️ Game Over ☠️</StyledH3>}
    </>
  )
}

export default Controls
