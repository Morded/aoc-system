import { RefObject, useCallback, useEffect } from "react"

const useAnimatedBlob = (refBlob: RefObject<HTMLDivElement>) => {
  const { current: elBlob } = refBlob

  const handleMove = useCallback(() => {(event: MouseEvent) => {
    if (!elBlob || !event) return 
    const { clientX, clientY } = event;

    elBlob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 2000, fill: "forwards"})
  }}, [])

  useEffect(() => {
    document.addEventListener('pointermove', handleMove)
    return () => document.removeEventListener('pointermove', handleMove)
  }, [handleMove])
}

export default useAnimatedBlob
