import { useEffect, useRef } from "react";
import ColoredDot from "./ColoredDot";
import Header2 from "./Header2";
import SubHeader from "./SubHeader";
import { gsap } from "gsap"
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
// import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


const HorizontalSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  useEffect(() => {
    // const components = document.querySelectorAll('#horizontal-container')
    const components = document.querySelectorAll('#tile')
    const container: HTMLElement | null = document.querySelector('#horizontal-container')

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => "+=1400px"
      }
    })
  }, [])

  return (
    <div id="horizontal-container" ref={refContainer} className="min-h-screen w-[300vw] flex items-center">
      <Tile>
        <SubHeader>Üzleti folyamatok</SubHeader>
        <Header2>
          Ne hagyd hogy a folyamatok irányítsanak téged. Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy<ColoredDot color="text-aocViolet"/>
        </Header2>
      </Tile>
      <Tile>
        <SubHeader>Üzleti folyamatok</SubHeader>
        <Header2>
          Ne hagyd hogy a folyamatok irányítsanak téged. Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy<ColoredDot color="text-aocViolet"/>
        </Header2>
      </Tile>
      <Tile>
        <SubHeader>Üzleti folyamatok</SubHeader>
        <Header2>
          Ne hagyd hogy a folyamatok irányítsanak téged. Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy<ColoredDot color="text-aocViolet"/>
        </Header2>
      </Tile>
    </div>
  )
}

export default HorizontalSection;

type TileProps = {
  children: React.ReactNode
}

function Tile({ children }: TileProps) {
  return (
    <div className="w-screen flex justify-center items-center flex-none" id="tile">
      <div className="max-w-6xl text-center px-4">
        {children}
      </div>
    </div>
  )
}
