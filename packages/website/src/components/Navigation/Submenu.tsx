import React, { Fragment, useEffect, useRef, useState } from 'react'
import { StyledSubmenu, SubmenuItems } from './StyledComponents'

type SubmenuProps = {
  title: string,
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
            break
          }
        }
      }
    }

    document.addEventListener('mousedown', handleSubmenuClose, false)
    document.addEventListener('keydown', handleSubmenuClose, false)

    return function cleanup() {
      document.removeEventListener('mousedown', handleSubmenuClose, false)
      document.removeEventListener('keydown', handleSubmenuClose, false)
    }
  })

  const handleSubmenuClick = () => {
    setSubmenu(!showSubmenu)
  }

  return (
    <StyledSubmenu
      ref={submenu}
      role='menu'
      tabIndex={0}
      onClick={handleSubmenuClick}
      onKeyPress={handleSubmenuClick}
    >
      <p>{title}</p>
      <SubmenuItems show={showSubmenu}>
        <hr />
        {React.Children.map(children, (child, index) => {
          if (index < React.Children.count(children) - 1) {
            return (
              <Fragment key={index}>
                {child}
                <hr />
              </Fragment>
            )
          }
          return child
        })}
      </SubmenuItems>
    </StyledSubmenu>
  )
}

export default Submenu
