import React, { createContext, useContext, useRef } from "react"
import { ScrollContext } from "../utils/ScrollObserver"


type WrapperProps = {
  children: React.ReactNode,
  numOfPages: number
}

type TileContextValue = {
  numOfPages: number,
  currentPage: number
}

export const TileContext = createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0
})

export const TileWrapper = ({ children, numOfPages }: WrapperProps) => {
  const {scrollY} = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  let currentPage = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer 
    const screenH = window.innerHeight
    const halfH = screenH / 2 
    const percentY = Math.min(
      clientHeight + halfH, 
      Math.max(-screenH, scrollY - offsetTop) + halfH
    ) / clientHeight
    currentPage = percentY * numOfPages
  }

  return (
    <TileContext.Provider value={{numOfPages, currentPage}}>
      <div ref={refContainer} className="relative text-aocLight w-full" style={{
        height: `${numOfPages * 100}vh`
      }}>
        {children}
      </div>
    </TileContext.Provider>
  )
}

type TileBackgroundProps = {
  children?: React.ReactNode
}

export const TileBackground = ({ children }: TileBackgroundProps) => ( 
  <div className="absolute h-full w-full">{children}</div>
)

type TileContentProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const TileContent = ({ children }: TileContentProps) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
)

type TileProps = {
  page: number,
  renderContent: (progress: number) => any
}

export const Tile = ({ page, renderContent }: TileProps) => {
  const { currentPage, numOfPages } = useContext(TileContext)
  const progress = Math.max(0, currentPage - page)
  const refContainer = useRef<HTMLDivElement>(null)

  let opacity = Math.min(1, Math.max(0, progress * 4)) 
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }

  return (
    <div ref={refContainer} className="sticky top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress  >= 1 ? 'none' : undefined,
        opacity
      }}
    >
      {renderContent(progress)}
    </div>
  )
}
