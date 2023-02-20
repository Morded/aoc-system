import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../utils/ScrollObserver";

const ScrollToTop = () => {
  const { scrollY } = useContext(ScrollContext)
  const [opacity, setOpacity] = useState(0)
  const [right, setRight] = useState('-3rem')

  useEffect(() => {
    const width = window.innerWidth;

    if (scrollY > window.innerHeight / 3) {
      setOpacity(1)
      setRight(width < 765 ? '-4rem' : '-3rem')
    } else {
      setOpacity(0)
      setRight('-5rem')
    }
  }, [scrollY])

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`
        font-serif flex gap-2 uppercase text-sm fixed top-1/2 -rotate-90 tracking-[0.3em] 
        group -right-5 bg-aocLight py-1 px-4 rounded-full z-40 transition-all duration-500
        cursor-pointer hover:shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]
      `}
      style={{
        pointerEvents: opacity === 0 ? 'none' : undefined,
        opacity,
        right
      }}
      onClick={handleClick}
    >
      tetejére
      <Image 
        alt="arrow" 
        src="/arrow.svg" 
        width={27} 
        height={10} 
        className="group-hover:translate-x-2 transition-all"
      />
    </div>
  )
}

export default ScrollToTop;
