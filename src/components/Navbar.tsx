import { useState } from "react";
import mainMenu from "../../public/mainmenu";
import AOCLogo from "./AOCLogo";
import Button from "./Button";
import ModalButton from "./ModalButton";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl absolute w-full py-8 flex justify-between items-center z-50 px-4 lg:px-0">
        <AOCLogo />

        <ModalButton type="hamburger" onClick={() => setIsOpen(!isOpen)}/>
        <div className={`
          flex flex-col items-center fixed top-0 left-0 w-full gap-0 pb-10 min-h-screen z-[9999]
          transition-all ease-in-out bg-aocOrange bg-[url(/noise.png)]
          md:flex-row md:relative md:visible md:bg-transparent md:w-auto md:gap-12 md:pb-0 md:min-h-0 
          md:bg-none
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
              {mainMenu
                .filter(item => item.place === undefined || item.place === "nav")
                .map((item, i) => 
                    <NavbarItem key={i} item={item} />
                )
              }
            </ul>
          </nav>
          <Button href="#" text="Bejelentkezés" wFull={true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
