import { RefObject, useContext, useEffect, useState } from "react"
import { ScrollContext } from "../utils/ScrollObserver"

export const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

type Props = {
  container: RefObject<HTMLDivElement>
  numOfPages: number
}

const useHighlightTextOnScroll = ({container, numOfPages}: Props) => {
  const {scrollY} = useContext(ScrollContext)
  const [progress, setProgress] = useState(0.2)

  useEffect(() => {
    const { current: elContainer } = container
    if (elContainer) {
      const { clientHeight, offsetTop } = elContainer
      const screenH = window.innerHeight
      const halfH = screenH / 2
      const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
      setProgress(Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages)))
    }
  }, [scrollY, container, numOfPages])

  return progress
}

export default useHighlightTextOnScroll
