import { useEffect } from 'react'

type Props = {
  ref: React.MutableRefObject<any>
  callback(close: boolean): void
}

function useCloseDropdown({ ref, callback }: Props) {
  useEffect(() => {
    function handleSubmenuClose(event: KeyboardEvent | MouseEvent) {
      const { type, target } = event
      if (type === 'mousedown') {
        if (!ref.current.contains(target)) {
          callback(false)
        }
      }

      if (type === 'keydown') {
        const { key } = event as KeyboardEvent
        if (key === 'Escape') {
          callback(false)
        }
      }
    }

    const events = ['mousedown', 'keydown']
    events.forEach((type) => document.addEventListener(type, handleSubmenuClose as EventListener))

    return function cleanup() {
      events.forEach((type) =>
        document.removeEventListener(type, handleSubmenuClose as EventListener)
      )
    }
  })
}

export default useCloseDropdown
