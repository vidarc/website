import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledSubmenu, SubmenuItems } from './StyledComponents'

type SubmenuProps = {
  title: string
}

const Submenu: React.FunctionComponent<SubmenuProps> = ({ title, children }) => {
  const submenu = useRef(null)
  const [showSubmenu, setSubmenu] = useState(false)

  useEffect(() => {
    function handleSubmenuClose({ type, target, key }: KeyboardEvent) {
      switch (type) {
        case 'mousedown': {
          if (submenu.current.contains(target)) return
          setSubmenu(false)
          break
        }
        case 'keydown': {
          if (key === 'Escape') {
            setSubmenu(false)
          }
          break
        }
        default:
          break
      }
    }

    const events = ['mousedown', 'keydown']
    events.forEach(type => document.addEventListener(type, handleSubmenuClose))

    return function cleanup() {
      events.forEach(type => document.removeEventListener(type, handleSubmenuClose))
    }
  })

  const handleSubmenuClick = () => {
    setSubmenu(!showSubmenu)
  }

  return (
    <StyledSubmenu
      ref={submenu}
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
