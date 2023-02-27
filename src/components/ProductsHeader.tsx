import { FadeInScaleWhenVisible } from "../utils/FramerAnimations";
import BodyText from "./BodyText";
import Header3 from "./Header3";
import TextSwap from "./TextSwap";

const VARIANTS = ['fejlődsz', 'növekedsz', 'egyensúlyba kerülsz']
const COLORS = ['text-aocOrange', 'text-aocSky', 'text-aocPurple']

const ProductsHeader = () => {
  return (
    <section className="md:w-full max-w-6xl flex flex-col justify-center items-start sm:items-center min-h-[50vh] my-24 md:mb-56 px-4 xl:px-0 gap-4">
      <BodyText>Tekintsd meg termékeinket</BodyText>
      <FadeInScaleWhenVisible delay={0.4}>
        <div className="flex flex-col justify-center items-start sm:items-center">
          <Header3>Üzleti szoftvereinkkel</Header3>
          <Header3>
            <TextSwap strings={VARIANTS} colors={COLORS} />
          </Header3>
        </div>
      </FadeInScaleWhenVisible>
    </section>
  )
}

export default ProductsHeader;
