import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import ModalButton from "./ModalButton";

const MENU = [
  "Termékek  +",
  "Cég  +",
  "Karrier",
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl absolute w-full p-8 flex justify-between items-center z-50 mx-auto">
        <Link href="/">
          <Image 
            alt="AOC system logo, Homepage link" 
            src="/aoc-logo.svg" 
            width={63} 
            height={34}
          ></Image>
        </Link>

        <ModalButton type="hamburger" onClick={() => setIsOpen(!isOpen)}/>
        <div className={`
          flex flex-col items-center fixed top-0 left-0 bg-white w-full gap-0 pb-10 min-h-screen z-[9999]
          transition-all ease-in-out
          md:flex-row md:relative md:visible md:bg-transparent md:w-auto md:gap-12 md:pb-0 md:min-h-0 
          ${isOpen 
            ? 'visible'
            : 'invisible'
          } 
        `}>
          <ModalButton type="exit" onClick={() => setIsOpen(!isOpen)}/>
          <nav className="w-full md:w-auto">
            <ul className={`
              flex flex-col items-center w-full
              md:flex-row md:gap-10 md:w-auto
            `}>
              {MENU.map((item, i) => 
                <li key={i} className="w-full py-6 md:w-auto md:py-0">
                  <Link href="#" className="w-full p-6 md:w-auto md:p-0">{item}</Link>
                </li>
              )}
            </ul>
          </nav>
          <Button href="#" text="Bejelentkezés" wFull={true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
