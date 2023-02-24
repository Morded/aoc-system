import { FadeInScaleWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations";
import Header1 from "./Header1";
import SubHeader from "./SubHeader";
import TextSwap from "./TextSwap";

const VARIANTS = ['fejlődsz', 'növekedsz', 'egyensúlyba kerülsz']
const COLORS = ['text-aocOrange', 'text-aocSky', 'text-aocPurple']

const ProductsHeader = () => {
  return (
    <section className="md:w-full max-w-6xl flex flex-col justify-center items-start sm:items-center min-h-[50vh] my-24 md:mb-56 px-4 xl:px-0">
      <FadeInWhenVisible delay={0.1}>
        <SubHeader>Tekintsd meg termékeinket</SubHeader>
      </FadeInWhenVisible>
      <FadeInScaleWhenVisible delay={0.4}>
        <div className="flex flex-col justify-center items-start sm:items-center">
          <Header1>Üzleti szoftvereinkkel</Header1>
          <Header1>
            <TextSwap strings={VARIANTS} colors={COLORS} />.
          </Header1>
        </div>
      </FadeInScaleWhenVisible>
    </section>
  )
}

export default ProductsHeader;
