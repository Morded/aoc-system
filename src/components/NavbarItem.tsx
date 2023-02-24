import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuProps } from "../../public/mainmenu";
import ModalNav from "./ModalNav";
import { motion } from "framer-motion";

type NavbarItemProps = {
  item: MenuProps;
}

const NavbarItem = ({ item }: NavbarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="w-full md:w-auto md:py-0 relative" onMouseLeave={() => setIsOpen(false)}>
      <Link
        onMouseEnter={() => setIsOpen(true)}
        href={item.href ?? "#"} 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex w-full p-6 px-8 text-3xl font-bold text-aocDark
          md:font-normal md:w-auto md:p-0 md:text-base
          hover:opacity-60 items-center
      `}>
        {item.name}
        {item.items && 
          <div className="relative ml-2 h-5 w-5 md:h-3 md:w-3">
            <motion.div
              initial="hidden"
              animate={isOpen? "visible" : "hidden"}
              transition={{ duration: 0.1, delay: 0.1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
              className="absolute"
            >
              <Image alt="plusminus" src={`/minus.svg`} width={12} height={12} className="h-5 w-5 md:h-3 md:w-3"/>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={!isOpen ? "visible" : "hidden"}
              transition={{ duration: 0.1, delay: 0.1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
              className="absolute"
            >
              <Image alt="plusminus" src={`/plus.svg`} width={12} height={12} className="h-5 w-5 md:h-3 md:w-3"/>
            </motion.div>
          </div>
        }
      </Link>
      {(item.items) &&
        <ModalNav isOpen={isOpen}>
          {item.items
            .filter((subitem) => subitem.place === undefined || subitem.place === 'nav')
            .map((subitem, index) => 
              <Link 
                key={index}
                href={subitem.href ?? '#'} 
                className={`py-3 text-center
                  flex w-full p-6 pl-16 text-2xl font-bold text-aocDark
                  md:font-normal md:w-auto md:px-6 md:text-base
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
      }
    </li>
  )
}

export default NavbarItem;

