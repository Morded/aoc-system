import { FadeInScaleWhenVisible, FadeInUpWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations";
import Header1 from "./Header1";
import ProductPicker from "./ProductPicker";
import SerifBody from "./SerifBody";

const TryDemoCTA = () => {
  return (
    <section className="w-full px-4 lg:px-0 py-28 bg-aocOrange bg-[url(/noise.png)] flex justify-center mb-5">
      <div className="max-w-7xl flex flex-col justify-center items-center text-center gap-8">
        <FadeInScaleWhenVisible delay={0.1}>
          <Header1>Próbálja ki ingyenes demóink egyikét</Header1>
        </FadeInScaleWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <SerifBody>
            Az első 14 nap ingyenes
          </SerifBody>
        </FadeInWhenVisible>
        <FadeInUpWhenVisible delay={0.3}>
          <ProductPicker buttonText="Kipróbálom" big />
        </FadeInUpWhenVisible>
      </div>
    </section>
  )
}

export default TryDemoCTA;
