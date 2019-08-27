import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import useCloseDropdown from './useDropdownClose'
import { StyledSubmenu, SubmenuItems } from './StyledComponents'

type SubmenuProps = {
  title: string
}

const Submenu: React.FunctionComponent<SubmenuProps> = ({ title, children }) => {
  const ref = useRef(null)
  const [showSubmenu, setSubmenu] = useState(false)
  useCloseDropdown({ ref, callback: setSubmenu })

  const handleSubmenuClick = () => {
    setSubmenu(!showSubmenu)
  }

  return (
    <StyledSubmenu
      ref={ref}
      role="menu"
      tabIndex={0}
      onClick={handleSubmenuClick}
      onKeyPress={handleSubmenuClick}
    >
      <p>{title}</p>
      <SubmenuItems show={showSubmenu}>{children}</SubmenuItems>
    </StyledSubmenu>
  )
}

Submenu.propTypes = {
  title: PropTypes.string.isRequired
}

export default Submenu
