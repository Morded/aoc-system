import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion"
import { raleway, roboto } from "../pages/_app";
import ProductContent, { ProductContentWrapper } from "./ProductsModalContent";
import { opacityVariants } from "../utils/FramerAnimations";
import useEscapeCloser from "../utils/useEscapeCloser";

type Props = {
  onClose: () => void
}

const ProductsModal = ({onClose}: Props) => {
  useEscapeCloser(onClose);
  const reducedMotion = useReducedMotion()

  return (
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2 }}
        variants={reducedMotion ? {} : opacityVariants}
        className={`${roboto.variable} ${raleway.variable} w-full h-screen flex justify-center items-center z-50 fixed top-0 left-0 font-sans`}
      >
        <TransparentBackground onClose={onClose} />
        <div className="shadow-xl rounded z-50 h-screen w-full md:h-auto md:w-auto overflow-y-auto">
          <CloseButtonWrapper>
            <Image 
              alt="close button"
              src="/exit.svg" 
              width={42}
              height={42}
              className="transition-all cursor-pointer float-right mr-2 mt-2 p-3"
              onClick={onClose}
            />
          </CloseButtonWrapper>
          <ProductContentWrapper>
            <ProductContent
              subheader="Sales Activity"
              header="Az új értékesítési platform."
              text="Egyetlen cél vezérelt minket. Egy olyan eszközt adni a pénzügyi értékesítők, közvetítők és tanácsadók kezébe, mely egyszerű, gyors, hatékony és teljesítményt növel!"
              href="https://aocsystem.com/#/products/sales-activity"
              bgColor="bg-aocSky"
            />
            <ProductContent
              subheader="Business & Office"
              header="Stabil alapokra építve fejlődsz."
              text="Több, mint egyszerű dokumentumtárolás. A rendszer támogat és segít átlátni a céged pénzügyi és könyvelési folyamatait!"
              href="https://aocsystem.com/#/products/sales-activity"
              bgColor="bg-aocOrange"
              delay={0.3}
            />
          </ProductContentWrapper>
        </div>
      </motion.div>
  );
}

const TransparentBackground = ({onClose}: {onClose: () => void}) => 
  <div className="absolute w-full h-screen bg-aocDark opacity-60 z-30" onClick={onClose}></div>


type ChildrenProps = {
  children: React.ReactNode
}

const CloseButtonWrapper = ({children}: ChildrenProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="bg-aocSky bg-[url(/noise.png)]"></div>
    <div className="bg-aocSky md:bg-aocOrange bg-[url(/noise.png)] flex justify-end">
      {children}
    </div>
  </div>
)

export default ProductsModal;
