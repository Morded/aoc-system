import BodyText from "./BodyText"
import Header3 from "./Header3"

const OurGoal = () => {
  return (
    <section className="w-full max-w-6xl grid grid-cols-12 gap-[15px] px-4 xl:px-0 my-10">
      <div className="col-span-12 sm:col-span-5">
        <Header3>Célunk</Header3>
      </div>
      <div className="col-span-12 sm:col-span-7">
        <BodyText>
          A közös célt mindig szem előtt tartva, örömmel alkotunk olykor a saját határainkat feszegetve. 
          <br/><br/>
          Ez az a recept amivel hatékonyan tudjuk készíteni termékeinket és a lehető legközelebb érhetünk a tökéletességhez. 
        </BodyText>
      </div>
    </section>
  )
}

export default OurGoal
