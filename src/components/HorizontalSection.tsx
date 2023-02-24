import { useRef } from 'react';
import SubHeader from './SubHeader';
import Header2 from './Header2';
import styles from '../styles/animations.module.css'
import HorizontalTile from './HorizontalTile';
// import useAnimatedBlob from '../utils/useAnimatedBlob';
import useHorizontalScrolling from '../utils/useHorizontalScrolling';
import { FadeInScaleWhenVisible, FadeInWhenVisible } from '../utils/FramerAnimations';

function HorizontalSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const refBlob = useRef<HTMLDivElement>(null)
  // useAnimatedBlob(refBlob)
  useHorizontalScrolling(scroller)

  return (
    <div className="overflow-hidden flex self-start">
      <div className="overflow-clip">
        <div
          id="skills"
          ref={scroller}
          className="flex overflow-hidden w-[300vw] m-0 relative h-screen"
        >
        <div 
          ref={refBlob}
          className={`absolute w-[300px] lg:w-[500px] aspect-square bg-aocOrange rounded-full 
            left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-gradient-to-r from-aocOrange to-aocSky blur-3xl opacity-40
            invisible md:visible
            ${styles.rotate ?? ""}
          `}
        ></div>
          <HorizontalTile>
            <Content
              header="Üzleti folyamatok"
              text="Ne hagyd hogy a folyamatok irányítsanak téged."
              subText="Felhőalapú rendszerünkkel kézhez kapod a szükséges információt, akárhol is vagy."
            />
          </HorizontalTile>
          <HorizontalTile>
            <Content
              header="Stabil alapokra építve"
              text="Csak alapkőre lehet biztosat építeni, közös munkával ez megingathatatlan lesz!"
            />
          </HorizontalTile>
          <HorizontalTile>
            <Content
              header="Időmenedzsment"
              text="Koncentrálj arra ami igazán fontos, mi lefutjuk helyetted a kötelező köröket."
              subText="Intelligens, automatizált funkciók segítenek a munkában."
            />
          </HorizontalTile>
        </div>
      </div>
    </div>
  );
}

export default HorizontalSection;

type ContentProps = {
  header: string 
  text: string
  subText?: string
}

function Content ({header, text, subText}: ContentProps) {
  return (
    <>
      <FadeInWhenVisible>
        <SubHeader>{header}</SubHeader>
      </FadeInWhenVisible>
      <div className='my-10'></div>
      <FadeInScaleWhenVisible delay={0.2}>
        <Header2>
          {text}
          {subText && 
            <>
            <br/><br/> {subText}
            </>
          }
        </Header2>
      </FadeInScaleWhenVisible>
    </>
  )
}
