import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SubHeader from './SubHeader';
import Header2 from './Header2';

gsap.registerPlugin(ScrollTrigger);

function HorizontalSection() {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillSet = gsap.utils.toArray('.skill-set');

    const to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 0,
        snap: {
          snapTo: 1 / (skillSet.length - 1), 
          duration: 0.2, 
          delay: 0, 
          ease: "power3.inOut"
        },

        end: () => `+=${window.innerWidth}`
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex self-start">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className="flex overflow-x-hidden w-[300vw] m-0 relative h-screen"
        >
          <Tile>
            <SubHeader>Üzleti folyamatok</SubHeader>
            <Header2>
              Ne hagyd hogy a folyamatok irányítsanak téged. Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy.
            </Header2>
          </Tile>
          <Tile>
            <SubHeader>Stabil alapokra építve</SubHeader>
            <Header2>
              Csak alapkőre lehet biztosat építeni, közös munkával ez megingathatatlan lesz!
            </Header2>
          </Tile>
          <Tile>
            <SubHeader>Időmenedzsment</SubHeader>
            <Header2>
              Koncentrálj arra ami igazán fontos, mi lefutjuk helyetted a kötelező köröket. Intelligens, automatizált funkciók segítenek a munkában.
            </Header2>
          </Tile>
        </div>
      </div>
    </div>
  );
}

type TileProps = {
  children: React.ReactNode
}

function Tile({ children }: TileProps) {
  return (
    <section className="w-screen flex justify-center items-center flex-none skill-set ns-horizontal-section__item">
      <div className="max-w-screen-2xl text-center px-4">
        {children}
      </div>
    </section>
  )
}

export default HorizontalSection;
