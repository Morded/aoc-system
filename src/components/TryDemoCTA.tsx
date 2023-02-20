import Button from "./Button";
import Header1 from "./Header1";
import SerifBody from "./SerifBody";

const TryDemoCTA = () => {
  return (
    <section className="w-full px-4 lg:px-0 py-10 lg:py-20 bg-aocOrange bg-[url(/noise.png)] flex justify-center">
      <div className="max-w-7xl flex flex-col justify-center items-center text-center gap-8">
        <Header1>Próbálja ki ingyenes demóink egyikét</Header1>
        <SerifBody>
          Az első 14 nap ingyenes
        </SerifBody>
        <Button href="#" text="Kipróbálom" big={true}/>
      </div>
    </section>
  )
}

export default TryDemoCTA;
