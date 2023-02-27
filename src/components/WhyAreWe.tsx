import { useRef } from "react"
import useHighlightTextOnScroll, { opacityForBlock } from "../utils/useHighlightTextOnScroll"
import BodyText from "./BodyText"
import Header3 from "./Header3"

const BackgroundObject = ({color}: {color: string}) => 
  <div className={`absolute w-16 h-48 bg-aocSky opacity-30 z-[-1] rotate-[135deg] left-[20%] sm:left-1/2 sm:-translate-x-1/2 ${color}`}></div>

const WhyAreWe = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const progress = useHighlightTextOnScroll({container: refContainer, numOfPages: 5})

  return (
    <section className="w-full flex flex-col items-center px-4 xl:px-0 my-10">
      <div ref={refContainer} className="w-full max-w-6xl grid grid-cols-12 justify-center gap-[15px]">
        <div className="col-span-12 sm:col-span-2 relative">
          <BackgroundObject color='bg-aocSky' />
          <div style={{
            opacity: Math.max(
              opacityForBlock(progress, 0),
              opacityForBlock(progress, 1),
              opacityForBlock(progress, 2),
            )
          }}>
            <BodyText>Mi vezérelt minket?</BodyText>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-10">
          <Header3>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 0)
            }}>Úgy éreztük szükség van egy eszközre ami segít egyensúlyba hozni a szabadidőt a munkával.</span>
            <br/><br/>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 1)
            }}>Ami visszaadja az embereknek a munka szeretetét.</span>
            <br/><br/>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 2)
            }}>Ezért jöttünk létre, hogy megmutassuk, így is lehet.</span>
            <br/><br/>
          </Header3>
        </div>

        <div className="col-span-12 sm:col-span-2 relative">
          <BackgroundObject color='bg-aocPurple' />
          <div style={{
            opacity: Math.max(
              opacityForBlock(progress, 3),
              opacityForBlock(progress, 4),
            )
          }}>
            <BodyText>Célunk</BodyText>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-10">
          <Header3>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 3)
            }}>A közös célt mindig szem előtt tartva, örömmel alkotunk olykor a saját határainkat feszegetve.
            </span>
            <br/><br/>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 4)
            }}>Ez az a recept amivel hatékonyan tudjuk készíteni termékeinket és a lehető legközelebb érhetünk a tökéletességhez.
            </span>
          </Header3>
        </div>
      </div>
    </section>
  )
}

export default WhyAreWe

