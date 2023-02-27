import Link from "next/link"
import BaseText from "./BaseText"
import Button from "./Button"
import Header2 from "./Header2"
import { FadeIn } from "../utils/FramerAnimations"
import BodyText from "./BodyText"

type ProductProps = { 
  subheader: string
  header: string
  text: string
  href: string
  bgColor: string
  delay?: number
}

type ChildrenProps = {
  children: React.ReactNode
}

export const ProductContentWrapper = ({children}: ChildrenProps) => 
  <div className="grid grid-cols-1 md:grid-cols-2">{children}</div>

const ProductContent = ({
  subheader, 
  header, 
  text, 
  href, 
  bgColor, 
  delay
}: ProductProps) => {
  return (
    <div>
      <div className={`flex flex-col gap-4 p-10 pt-10 md:pt-0 md:gap-6 md:max-w-lg mx-auto justify-between h-full ${bgColor} bg-[url(/noise.png)]`}> 
        <div className="flex flex-col">
          <FadeIn delay={delay ? delay + 0.2 : 0.2}>
            <BodyText>{subheader}</BodyText>
          </FadeIn>
          <FadeIn delay={delay ? delay + 0.3 : 0.3}>
            <div className="mb-6 md:mb-10" >
              <Header2>{header}</Header2>
            </div>
          </FadeIn>
          <FadeIn delay={delay ? delay + 0.4 : 0.4}>
            <BaseText>{text}</BaseText>
          </FadeIn>
        </div>
          <FadeIn delay={delay ? delay + 0.5 : 0.5}>
            <Link href={href} className="font-bold font-serif">
              Részletek
            </Link>
          </FadeIn>
        <div className="flex gap-6 items-center">
          <FadeIn delay={delay ? delay + 0.6 : 0.6}>
            <Button 
              href={`${href}/trial`}
              text="Próbaverzió" 
             />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

export default ProductContent
