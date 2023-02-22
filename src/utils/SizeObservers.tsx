import { createContext, useCallback, useEffect, useState } from "react";

type ScrollValue = {
  innerWidth: number;
}

export const SizeContext = createContext<ScrollValue>({
  innerWidth: 0
})

type SizeObserverProps = {
  children: React.ReactNode
}

const SizeObserver = ({children}: SizeObserverProps) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    handleResize()   
    window.addEventListener('resize', handleResize, {passive: true})
    return() => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <SizeContext.Provider value={{innerWidth}}>
      {children}
    </SizeContext.Provider>
  )
}

export default SizeObserver;
