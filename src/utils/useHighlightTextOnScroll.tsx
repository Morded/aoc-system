import { RefObject, useContext, useEffect, useState } from "react"
import { ScrollContext } from "../utils/ScrollObserver"

const DEFAULT_OPACITY = 0.05

export const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return DEFAULT_OPACITY
}

type Props = {
  container: RefObject<HTMLDivElement>
  numOfPages: number
}

const useHighlightTextOnScroll = ({container, numOfPages}: Props) => {
  const {scrollY} = useContext(ScrollContext)
  const [progress, setProgress] = useState(DEFAULT_OPACITY)

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
