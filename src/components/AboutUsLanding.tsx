import Header3 from "./Header3"
import styles from "../styles/about.module.css"
import Image from "next/image"
import { FadeInScaleWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations"

const BottomTriangle = () => 
  <div className={`w-full h-[10vh] relative -translate-y-[10vh] ${styles.triangle ?? ""}`}></div>

const TeamPhoto = () => (
  <div className="min-h-[50vh] sm:min-h-screen w-full max-w-6xl flex justify-center left-1/2 -translate-x-1/2 absolute -bottom-[20%] sm:-bottom-[60%]">
    <div className="relative w-full">
      <FadeInWhenVisible delay={0.5}>
        <div className="ml-4 px-1 lg:px-0 xl:ml-0 font-serif font-medium text-2xl absolute top-1/4 sm:top-1/3 z-50 text-aocLight lg:text-aocDark bg-aocDark lg:bg-transparent">A csapat</div>
      </FadeInWhenVisible>
      <Image alt="teamphoto" src="/teamphoto.webp" fill style={{
        objectFit: "contain"
      }}
        className="object-top"
      />
    </div>
  </div>
)

const AboutUslanding = () => {
  return (
    <header className="w-full sm:min-h-[100vh] text-aocDark">
      <div className={`w-full h-screen sm:h-[120vh] flex flex-col justify-start lg:justify-center items-start sm:items-center bg-aocOrange bg-[url(/noise.png)] px-4 xl:px-0`}>
        <div className="h-[125px] lg:h-[200px]"></div>
        <div className="text-center flex flex-col justify-start md:justify-center md:min-h-screen  items-center">
          <div className="w-full h-full max-w-6xl px-0 md:px-4 xl:px-0 z-30">
            <FadeInScaleWhenVisible delay={0.1}>
              <Header3>
                Nem megfelelni akarunk, hanem saját gondolatainkat adjuk át szoftvereinken keresztül.
              </Header3>
            </FadeInScaleWhenVisible>
          </div>
          <TeamPhoto />
        </div>
      </div>
      <BottomTriangle />
    </header>
  )
}

export default AboutUslanding
