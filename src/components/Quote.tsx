import Image from "next/image"
import { FadeInWhenVisible } from "../utils/FramerAnimations"

const Portrait = () => 
  <div className="absolute w-full sm:w-[70%] h-[325px] sm:h-[625px] left-0 top-0 z-[-1]">
    <Image alt="portrait" src="/zsolt.webp" fill className="object-contain"/>
  </div>

const Quote = () => {
  return (
    <section className="w-full min-h-[400px] sm:min-h-[700px] flex justify-start md:justify-end max-w-6xl gap-[15px] relative items-end sm:items-center my-20 sm:my-0">
      <div className="sm:w-full">
      </div>
      <FadeInWhenVisible delay={0.3}>
        <div className="font-serif font-medium text-4xl md:text-[3.25rem] leading-none w-full text-center sm:text-left text-aocDark">
          &quot;Az alkotás öröme küldetéstudatot teremt.&quot;
        </div>
      </FadeInWhenVisible>
      <Portrait />
    </section>
  )
}

export default Quote
