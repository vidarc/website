import React, { SyntheticEvent } from 'react'

import { faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  onClick: (event: SyntheticEvent) => void
}

const PauseIcon = ({ onClick }: Props) => (
  <div onClick={onClick}>
    <FontAwesomeIcon icon={faPause} />
  </div>
)

export default PauseIcon
