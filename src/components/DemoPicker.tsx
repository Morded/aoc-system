import Link from "next/link";
import mainMenu from "../../public/mainmenu";
import ModalNav from "./ModalNav";
import {motion} from "framer-motion"

type DemoPickerProps = {
  isOpen: boolean;
}

const DemoPicker = ({ isOpen }: DemoPickerProps) => {
  const items = mainMenu.find(item => item.name === 'Termékek')?.items
  if (!items) return null

  return (
    <ModalNav isOpen={isOpen} notNav={true}>
      {items
        .map((subitem, index) => 
          <Link 
            href={subitem.href ? `${subitem.href ?? ""}/trial` : '#'} 
            key={index} 
            className={`py-3 text-center hover:opacity-60 transition-opacity
              ${isOpen ? "visible" : "invisible"}
              flex p-6 text-aocDark
              w-auto px-6 text-base
              hover:opacity-60 items-center
            `}
          >
            <motion.div
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
            >
              {subitem.name}
            </motion.div>
          </Link>
      )}
    </ModalNav>
  )
}

export default DemoPicker;
