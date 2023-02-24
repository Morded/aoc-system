import Image from "next/image";
import { useRef } from "react";
import Button from "./Button";

type ProductContainerProps = {
  children: React.ReactNode
}

export const ProductContainer = ({ children }: ProductContainerProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">{children}</div>
)

export const ProductBackground = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-aocDark h-[40vh] lg:h-auto"></div>
    <div className="h-[60vh] lg:min-h-screen"></div>
  </div>
)

type ProductProps = {
  children: React.ReactNode;
  progress: number;
  page: number;
}

export const ProductLeft = ({children, progress, page}: ProductProps) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  let translateY = Math.max(0, 50 - progress * 3 * 50) 

  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50) 
  if (elContainer?.parentElement) 
    translateY -= elContainer.parentElement?.clientHeight * page

  return (
    <div ref={refContainer} className="flex flex-col items-center justify-center h-[40vh] lg:h-auto" style={{
      transform: `translateY(${translateY}px)`
    }}>
      <div className="px-4 md:w-5/6 text-xl md:text-[2rem] tracking-[0.06em] leading-none">
        {children}
      </div>
    </div>
  )
}

export const ProductRight = ({children, progress, page}: ProductProps) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  let translateY = Math.max(-50, -(progress - 0.5) * 50)

  if (elContainer?.parentElement) 
    translateY -= elContainer?.parentElement?.clientHeight * page
  
  return (
    <div ref={refContainer} className="flex flex-1 lg:items-center justify-center h-screen" style={{
      transform: `translateY(${translateY}px)`
    }}>
      <div className="w-full max-w-xl pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  )
}

type Props = {
  progress: number;
  page: number;
  header: string;
  text: string;
  href: string;
  bgColor: string; 
  textColor: string;
  image: string;
}

const Product = ({progress, page, header, text, href, bgColor, textColor, image }:Props) =>{
  return (
    <ProductContainer> 
      <ProductLeft progress={progress} page={page}> 
        <div className="flex flex-col gap-2 md:gap-3 max-w-lg mx-auto"> 
          <span className="text-aocGray">
            {header} 
          </span>
          <div className="text-3xl md:text-5xl font-bold tracking-[0.03em] mb-6 md:mb-10">
            {text}
          </div>
          <Button 
            href={href} 
            text="Részletek" 
            bgColor={bgColor} 
            textColor={textColor}
           />
        </div>
     </ProductLeft>
     <ProductRight progress={progress} page={page}>
        <div className="w-full mx-auto relative h-[70vh]">
           <Image alt="mobile app" src={`/${image}.svg`} fill className="max-w-xl" />
        </div>
     </ProductRight>
   </ProductContainer> 
  )
}

export default Product;
