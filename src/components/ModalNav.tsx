import {motion} from "framer-motion"

type ModalNavProps = {
  isOpen: boolean;
  children: React.ReactNode;
}

const ModalNav = ({ isOpen, children }: ModalNavProps) => {
  return (
    <motion.div 
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 0.2, type: "spring" }}
      variants={{
        visible: { opacity: 1, scale: 1, height: "auto" },
        hidden: { opacity: 0, scale: 0, height: 0 }
      }}
      className="md:rounded-md md:absolute md:w-max md:shadow md:bg-aocLight w-full flex flex-col">
      {children}
    </motion.div>
  )
}

export default ModalNav;

