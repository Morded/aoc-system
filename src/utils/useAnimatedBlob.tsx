import { RefObject, useEffect } from "react"

const useAnimatedBlob = (refBlob: RefObject<HTMLDivElement>) => {
  const { current: elBlob } = refBlob

  useEffect(() => {
    if (!elBlob) return 
    document.addEventListener('pointermove', (event: MouseEvent) => {
      if (!event) return
      const { clientX, clientY } = event;

      elBlob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 2000, fill: "forwards"})
    })
  }, [elBlob])
}

export default useAnimatedBlob
