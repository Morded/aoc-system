import { useCallback, useContext } from "react"
import { CarouselContext } from "./Carousel"
import styles from "../styles/carousel.module.css"

type CarouselItemProps = { 
  index: number,
  children: React.ReactNode
}

const CarouselItem = ({index, children}: CarouselItemProps) => {
  const { embla: emblaApi, selectedIndex} = useContext(CarouselContext)
  const isActive = selectedIndex === index 
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return 
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div className={`${styles.slide ?? ''} relative ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {children}
    </div>
  )
}

export default CarouselItem;
