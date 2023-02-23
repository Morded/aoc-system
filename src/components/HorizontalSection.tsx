import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SubHeader from './SubHeader';
import Header2 from './Header2';
import styles from '../styles/animations.module.css'

gsap.registerPlugin(ScrollTrigger);
let to: GSAPTween;

function HorizontalSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0)
  const refBlob = useRef<HTMLDivElement>(null)
  const { current: elBlob } = refBlob

  useEffect(() => {
    if (!elBlob) return 
    document.addEventListener('pointermove', (event: MouseEvent) => {
      if (!event) return
      const { clientX, clientY } = event;

      elBlob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 3000, fill: "forwards"})
    })
  }, [elBlob])

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
        <div 
          ref={refBlob} 
          className={`absolute w-[300px] lg:w-[500px] aspect-square bg-aocOrange rounded-full 
            left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-gradient-to-r from-aocOrange to-aocSky blur-3xl opacity-80
            ${styles.rotate ?? ""}
          `}
        ></div>
          <Tile page={0} numOfPages={2} progress={progress}>
            <SubHeader>Üzleti folyamatok</SubHeader>
            <div className='my-10'></div>
            <Header2>
              Ne hagyd hogy a folyamatok irányítsanak téged.<br/><br/>Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy.
            </Header2>
          </Tile>
          <Tile page={1} numOfPages={2} progress={progress}>
            <SubHeader>Stabil alapokra építve</SubHeader>
            <div className='my-10'></div>
            <Header2>
              Csak alapkőre lehet biztosat építeni, közös munkával ez megingathatatlan lesz!
            </Header2>
          </Tile>
          <Tile page={2} numOfPages={2} progress={progress}>
            <SubHeader>Időmenedzsment</SubHeader>
            <div className='my-10'></div>
            <Header2>
              Koncentrálj arra ami igazán fontos, mi lefutjuk helyetted a kötelező köröket.<br/><br/>Intelligens, automatizált funkciók segítenek a munkában.
            </Header2>
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
    opacity = Math.min(1, percent > 1 ? (1 - percent % 1) : (1 - percent % 1))
    if (percent >= .9 && percent <= 1) opacity = percent
    if (percent >= 2) opacity = 0.15
  }

  return (
    <section className="w-[200vw] flex justify-start items-center flex-none skill-set ns-horizontal-section__item relative">
      <div className="w-screen flex justify-center items-center text-center px-4 z-20">
        <div className='max-w-7xl tansition-opacity' style={{
          opacity
        }}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default HorizontalSection;
