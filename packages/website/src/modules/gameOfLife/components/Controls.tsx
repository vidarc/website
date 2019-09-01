import React from 'react'
import PropTypes from 'prop-types'
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
        <ma-icons name="play-solid" onClick={handlePlayClick} />
        <ma-icons name="pause-solid" onClick={handlePauseClick} />
        <ma-icons name="undo-solid" onClick={handleRestartClick} />
        <div>
          <p>Generation: {generation}</p>
        </div>
      </StyledDiv>
      {gameOver && (
        <StyledH3>
          <span role="img" aria-label="skull-emoji">
            ☠️
          </span>{' '}
          Game Over{' '}
          <span role="img" aria-label="skull-emoji">
            ☠️
          </span>
        </StyledH3>
      )}
    </>
  )
}

Controls.propTypes = {
  dispatch: PropTypes.func.isRequired,
  generation: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired
}

export default Controls
