import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuProps } from "../../public/mainmenu";
import ModalNav from "./ModalNav";

type NavbarItemProps = {
  item: MenuProps;
}

const NavbarItem = ({ item }: NavbarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="w-full md:w-auto md:py-0 relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href ?? "#"} 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex w-full p-6 px-8 text-3xl font-bold text-aocDark
          md:font-normal md:w-auto md:p-0 md:text-base
          hover:opacity-60 items-center
      `}>
        {item.name}
        {item.items && 
          <Image alt="plusminus" src={`/${isOpen ? 'minus' : 'plus'}.svg`} width={12} height={12} className="ml-2 h-5 w-5 md:h-3 md:w-3"/>
        }
      </Link>
      {item.items &&
        <ModalNav isOpen={isOpen}>
          {item.items
            .filter((subitem) => subitem.place === undefined || subitem.place === 'nav')
            .map((subitem, index) => 
              <Link 
                href={subitem.href ?? '#'} 
                key={index} 
                className={`py-3 text-center hover:opacity-60 transition-opacity
                  ${isOpen ? "visible" : "invisible"}
                  flex w-full p-6 pl-16 text-2xl font-bold text-aocDark
                  md:font-normal md:w-auto md:px-6 md:text-base
                  hover:opacity-60 items-center
                `}
              >
                {subitem.name}
              </Link>
          )}
        </ModalNav>
      }
    </li>
  )
}

export default NavbarItem;

