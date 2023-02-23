import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SubHeader from './SubHeader';
import Header2 from './Header2';
import { warn } from 'console';

gsap.registerPlugin(ScrollTrigger);
let to: GSAPTween;

function HorizontalSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const skillSet: HTMLElement[] = gsap.utils.toArray('.skill-set');

    to = gsap.to(skillSet, {
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
        onUpdate: self => setProgress(self.progress),

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
          <Tile page={0} numOfPages={2} progress={progress}>
            <SubHeader>Üzleti folyamatok</SubHeader>
            <Header2>
              Ne hagyd hogy a folyamatok irányítsanak téged. Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy.
            </Header2>
          </Tile>
          <Tile page={1} numOfPages={2} progress={progress}>
            <SubHeader>Stabil alapokra építve</SubHeader>
            <Header2>
              Csak alapkőre lehet biztosat építeni, közös munkával ez megingathatatlan lesz!
            </Header2>
          </Tile>
          <Tile page={2} numOfPages={2} progress={progress}>
            {/* <div className='anim'> */}
              <SubHeader>Időmenedzsment</SubHeader>
              <Header2>
                Koncentrálj arra ami igazán fontos, mi lefutjuk helyetted a kötelező köröket. Intelligens, automatizált funkciók segítenek a munkában.
              </Header2>
            {/* </div> */}
          </Tile>
        </div>
      </div>
    </div>
  );
}

type TileProps = {
  children: React.ReactNode
  page: number
  numOfPages: number
  progress: number
}

function Tile({ children, page, numOfPages, progress }: TileProps) {

  const hundred = page / numOfPages;
  const percent = page === 0 ? progress : progress / hundred;

  let opacity = 0.15
  if (page === 0) {
    opacity = Math.min(1, (1 - percent % 1) / 2)
    if(percent < .1) opacity = 1 
  } else {
    opacity = Math.min(1, percent > 1 ? (1 - percent % 1) / 2 : percent / 2)
    if (percent >= .85 && percent <= 1.15) opacity = 1
    if (percent >= 2) opacity = 0.15
  }

  return (
    <section className="w-screen flex justify-center items-center flex-none skill-set ns-horizontal-section__item tansition-opacity" style={{
      opacity
    }}>
      <div className="max-w-screen-2xl text-center px-4">
        {children}
      </div>
    </section>
  )
}

export default HorizontalSection;
