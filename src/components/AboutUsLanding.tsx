import Header3 from "./Header3"
import styles from "../styles/about.module.css"
import Image from "next/image"

const AboutUslanding = () => {
  return (
    <header className="w-full sm:min-h-[100vh] text-aocDark">
      <div className={`w-full h-[70vh] sm:h-[120vh] flex justify-center items-center sm:items-start bg-aocOrange bg-[url(/noise.png)] px-4 xl:px-0`}>
        <div className="text-center flex flex-col justify-center md:justify-center min-h-screen -mt-32 items-center">
          <div className="w-full h-full max-w-6xl px-0 md:px-4 xl:px-0">
            <Header3>
              Nem megfelelni akarunk, hanem saját gondolatainkat adjuk át szoftvereinken keresztül.
            </Header3>
          </div>
          <div className="min-h-screen w-full max-w-6xl flex justify-center left-1/2 -translate-x-1/2 absolute -bottom-[40%] sm:-bottom-[60%]">
            <div className="relative w-full h-screen">
              <div className="ml-4 px-1 lg:px-0 xl:ml-0 font-serif font-medium text-2xl absolute top-[15%] sm:top-1/3 z-10 text-aocLight lg:text-aocDark bg-aocDark lg:bg-transparent">A csapat</div>
              <Image alt="teamphoto" src="/teamphoto.png" fill style={{
                objectFit: "contain"
              }}
                // className="object-bottom md:object-[0%_10%] lg:object-top"
                className="object-top"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`
        w-full h-[10vh] relative -translate-y-[10vh] ${styles.triangle ?? ""}
      `}></div>
    </header>
  )
}

export default AboutUslanding
