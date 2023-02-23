import Header1 from "./Header1";
import SubHeader from "./SubHeader";
import TextSwap from "./TextSwap";

const VARIANTS = ['fejlődsz', 'növekedsz', 'egyensúlyba kerülsz']
const COLORS = ['text-aocOrange', 'text-aocSky', 'text-aocPurple']

const ProductsHeader = () => {
  return (
    <section className="md:w-full max-w-6xl flex flex-col justify-center items-start sm:items-center min-h-[50vh] my-24 md:mb-56 px-4 xl:px-0">
      <SubHeader>Tekintsd meg termékeinket</SubHeader>
      <Header1>Üzleti szoftvereinkkel</Header1>
      <Header1>
        <TextSwap strings={VARIANTS} colors={COLORS} />.
      </Header1>
    </section>
  )
}

export default ProductsHeader;
