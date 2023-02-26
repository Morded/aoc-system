import BodyText from "./BodyText"
import Header3 from "./Header3"

const BackgroundObject = () => 
  <div className="absolute w-16 h-48 bg-aocSky opacity-30 z-[-1] rotate-[135deg] left-[20%] sm:left-1/2 sm:-translate-x-1/2"></div>

const WhyAreWe = () => {
  return (
    <section className="w-full max-w-6xl grid grid-cols-12 justify-center gap-[15px] px-4 xl:px-0 my-10">
      <div className="col-span-12 sm:col-span-5 relative">
        <BackgroundObject />
        <Header3>Mi vezérelt minket?</Header3>
      </div>
      <div className="col-span-12 sm:col-span-7">
        <BodyText>
          Úgy éreztük szükség van egy eszközre ami segít egyensúlyba hozni a szabadidőt a munkával. 
          <br/><br/>
          Ami visszaadja az embereknek a munka szeretetét. 
          <br/><br/>
          Ezért jöttünk létre, hogy megmutassuk, így is lehet. 
        </BodyText>
      </div>
    </section>
  )
}

export default WhyAreWe
