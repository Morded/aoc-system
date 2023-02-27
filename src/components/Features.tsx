import { useRef } from "react"
import useHighlightTextOnScroll, { opacityForBlock } from "../utils/useHighlightTextOnScroll"
import BackgroundObject from "./BackgroundObject"
import BodyText from "./BodyText"
import Header3 from "./Header3"

const Features = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const progress = useHighlightTextOnScroll({container: refContainer, numOfPages: 3})

  return (
    <section className="w-full flex flex-col items-center px-4 xl:px-0 my-10">
      <div ref={refContainer} className="w-full max-w-6xl grid grid-cols-12 justify-center gap-[15px]">
        <div className="col-span-12 lg:col-span-3 relative">
          <BackgroundObject color='bg-aocOrange' />
          <div style={{
            opacity: opacityForBlock(progress, 0)
          }}>
            <BodyText>Üzleti folyamatok</BodyText>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Header3>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 0)
            }}>Ne hagyd hogy a folyamatok irányítsanak téged.
              Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy.
            </span>
            <br/><br/>
          </Header3>
        </div>

        <div className="col-span-12 lg:col-span-3 relative">
          <div style={{
            opacity: opacityForBlock(progress, 1)
          }}>
            <BodyText>Stabil alapokra építve</BodyText>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Header3>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 1)
            }}>Csak alapkőre lehet biztosat építeni, közös munkával ez megingathatatlan lesz!
            </span>
            <br/><br/>
          </Header3>
        </div>

        <div className="col-span-12 lg:col-span-3 relative">
          <div style={{
            opacity: opacityForBlock(progress, 2),
          }}>
            <BodyText>Időmenedzsment</BodyText>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Header3>
            <span className="transition-opacity duration-500" style={{
              opacity: opacityForBlock(progress, 2)
            }}>Koncentrálj arra ami igazán fontos, mi lefutjuk helyetted a kötelező köröket.
              Intelligens, automatizált funkciók segítenek a munkában.
            </span>
            <br/><br/>
          </Header3>
        </div>
      </div>
    </section>
  )
}

export default Features

