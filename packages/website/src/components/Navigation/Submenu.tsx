import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import useCloseDropdown from './useDropdownClose'
import { StyledSubmenu, SubmenuItems } from './StyledComponents'

const DropdownTitle = styled.p`
  display: flex;
  height: 32px;

  & ma-icons {
    position: relative;
    font-size: 0.75rem;
    margin-left: 10px;
    top: 3px;
  }
`

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
      <DropdownTitle>
        {title}
        <ma-icons name="caret-down-solid" />
      </DropdownTitle>
      <SubmenuItems show={showSubmenu}>{children}</SubmenuItems>
    </StyledSubmenu>
  )
}

Submenu.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Submenu
