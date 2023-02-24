import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import DemoPicker from "./DemoPicker";
import Header1 from "./Header1";
import SerifBody from "./SerifBody";
import UnderlinedText from "./UnderlinedText";
import { FadeInScaleWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations";

const Hero = () => {
  const gridItem = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(615)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('resize', () => setWidth(gridItem.current?.clientWidth ?? 615))
  }, [gridItem])

  return (
    <section className={`
      my-10 flex flex-col items-center justify-start gap-12 px-4 w-full max-w-6xl
      md:my-0 md:justify-center md:min-h-screen xl:px-0
    `}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 items-center">
          <div className="text-lg flex flex-col gap-6 col-span-1 order-1 md:order-0">
            <FadeInScaleWhenVisible delay={0.1}>
              <Header1>
                A <UnderlinedText>sikeres</UnderlinedText> vállalkozások platformja
              </Header1>
            </FadeInScaleWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <SerifBody>
                Egyszerű üzleti szoftverek, amelyek megkönnyítik a mindennapokat.
              </SerifBody>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div 
                className="mt-4 w-fit relative" 
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(!isOpen)}
                onMouseLeave={() => setIsOpen(!isOpen)}
              >
                <Button 
                  text="Próbaverzió kipróbálása" 
                  bgColor="bg-aocOrange" 
                  textColor="text-aocDark"
                />
                <DemoPicker isOpen={isOpen} />
              </div>
            </FadeInWhenVisible>
          </div>

          <div ref={gridItem} className="col-span-1 relative h-auto md:h-screen flex items-center justify-center order-0 md:order-1">
            <FadeInWhenVisible>
              <Image alt="girl with puzzle gif" src="/puzzle.gif" width={width} height={gridItem.current?.clientHeight ?? 500} />
            </FadeInWhenVisible>
            <div className="h-[110vh] top-0 absolute w-56 bg-aocOrange opacity-20 z-[-1] invisible md:visible"></div>
          </div>
        </div>
    </section>
  )
}

export default Hero;
