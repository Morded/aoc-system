import styles from "../styles/animations.module.css"
import {motion} from "framer-motion"

type ModalNavProps = {
  isOpen: boolean;
  notNav?: boolean;
  children: React.ReactNode;
}

const ModalNav = ({ isOpen, notNav, children }: ModalNavProps) => {
  return (
    <motion.div 
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 0.2, type: "spring" }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className={` 
      ${notNav === true 
      ? 'rounded-md absolute w-max shadow bg-aocLight' 
      : 'md:rounded-md md:absolute md:w-max md:shadow md:bg-aocLight'
      }
      w-full flex flex-col 
    `}>
      {children}
    </motion.div>
  )
}

export default ModalNav;

