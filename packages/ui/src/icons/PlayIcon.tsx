import React, { SyntheticEvent } from 'react'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  onClick: (event: SyntheticEvent) => void
}

const PlayIcon = ({ onClick }: Props) => (
  <div onClick={onClick}>
    <FontAwesomeIcon icon={faPlay} />
  </div>
)

export default PlayIcon
