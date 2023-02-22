import { useCallback, useContext, useRef } from "react";
import { SizeContext } from "../utils/SizeObservers";
import useAnimationFrame from "../utils/useAnimationFrame";

type Props = {
  children: React.ReactNode
  initialOffsetX: number;
  className: string;
  contentWidth: number;
}

const SliderContainer = ({children, initialOffsetX, className, contentWidth}: Props) => {
  const { innerWidth } = useContext(SizeContext)
  const refScrollX = useRef<number>(initialOffsetX)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  useAnimationFrame(enabled, useCallback(() => {
    const { current: elContainer } = refContainer 
    const { current: elContent } = refContent
    if (elContainer && elContent) {
      refScrollX.current += 0.75
      elContainer.scrollLeft = refScrollX.current
      if (elContainer.scrollLeft > elContent.clientWidth) {
        refScrollX.current = 0
        elContainer.scrollLeft = 0
      }
    }
  }, []))

  return (
    <div ref={refContainer} className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full ${className}`}>
      <div ref={refContent} className="inline-flex">
        {children}
      </div>
      <div className={enabled ? "inline-flex" : "hidden"}>
        {children}
      </div>
    </div>
  )
}

type ItemProps = {
  children: React.ReactNode
  width: number
}

export const SliderItem = ({children, width}: ItemProps) => (
  <div className="inline-flex justify-center items-center mx-4" style={{width}}>{children}</div>
)

export default SliderContainer;
