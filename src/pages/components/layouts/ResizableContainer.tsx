import { useState, useRef, useCallback, useEffect } from 'react'

export const ResizableContainer = ({ minWidth = 100, children }) => {
  const containerRef = useRef<any>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [containerWidth, setContainerWidth] = useState<any>(null)

  const startResizing = useCallback(() => {
    setIsResizing(true)
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setContainerWidth(
          mouseMoveEvent.clientX -
            containerRef?.current.getBoundingClientRect().left,
        )
      }
    },
    [isResizing],
  )

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  return (
    <div
      ref={containerRef}
      className="flex flex-grow-0 flex-shrink-0 min-x-min max-w-6xl bg-gray-200 border"
      style={{ width: containerWidth }}
      onMouseDown={(e) => e.preventDefault()}
    >
      {children}
      <div className="container-resizer" onMouseDown={startResizing}></div>
    </div>
  )
}
