import Image from "next/image"
import { useState } from "react";
import BodyText from "./BodyText"
import {motion} from "framer-motion"
import styles from "../styles/animations.module.css"

type ImageProps = {
  image: string;
  active?: boolean;
  onClick: () => void
}

const OfficeImage = ({image, active = false, onClick}: ImageProps) => 
  <motion.div 
    className={`${active ? '' : 'cursor-pointer'} ${active && styles.scale ? styles.scale : ""} h-[250px] sm:h-[385px] shadow-2xl overflow-hidden rounded-lg relative col-span-1 w-full sm:w-auto`}
    onClick={onClick}
  >
    <Image 
      alt="office" 
      src={`/${image}.webp`}
      fill
      className="object-cover object-center" 
    />
    {!active && 
      <motion.div 
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 0.6 } 
        }}
        className="absolute top-0 left-0 w-full h-full sm:bg-black"
      ></motion.div>
    }
  </motion.div>

const COLVARIANTS = ["2fr 6fr 2fr 2fr", "2fr 2fr 6fr 2fr", "2fr 2fr 2fr 6fr"]

const OfficePhotos = () => {
  const [cols, setCols] = useState(0)

  return (
    <section className="w-full max-w-6xl my-32 flex flex-col justify-center sm:gap-16 px-4 xl:px-0">
      <div className="flex flex-col sm:flex-row justify-start gap-6">
        <BodyText>Néhány kép az irodáról</BodyText>
        <Image alt="line" src="/line.svg" height={2} width={64} />
      </div>
      <div className="relative">
        <motion.div className={`flex flex-col sm:grid gap-[15px] w-full
          `} 
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
          variants={{
            initial: { gridTemplateColumns: COLVARIANTS[0] ?? "", scale: 0.95 },
            animate: { gridTemplateColumns: COLVARIANTS[cols], scale: 1 } 
          }}
        >
          <div className="sm:col-span-1"></div>
          <OfficeImage 
            image="office1" 
            active={cols === 0}
            onClick={() => setCols(0)} 
          />
          <OfficeImage 
            image="office2" 
            active={cols === 1}
            onClick={() => setCols(1)} 
          />
          <OfficeImage 
            image="office3" 
            active={cols === 2}
            onClick={() => setCols(2)} 
          />
        </motion.div>
        <div className="sm:w-4/6 lg:w-1/2 h-auto aspect-square z-[-1] bg-aocOrange opacity-30 absolute top-1/2 -translate-y-1/2 right-0 rounded-full"></div>
      </div>
    </section>
  )
}

export default OfficePhotos
