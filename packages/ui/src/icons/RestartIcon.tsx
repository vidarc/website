import { jsx } from '@emotion/core'
import { SyntheticEvent } from 'react'

import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  onClick: (event: SyntheticEvent) => void
}

const RestartIcon = ({ onClick }: Props) => (
  <div onClick={onClick}>
    <FontAwesomeIcon icon={faUndo} />
  </div>
)

export default RestartIcon
