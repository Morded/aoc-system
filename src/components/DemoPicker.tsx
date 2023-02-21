import Link from "next/link";
import mainMenu from "../../public/mainmenu";
import ModalNav from "./ModalNav";

type DemoPickerProps = {
  isOpen: boolean;
}

const DemoPicker = ({ isOpen }: DemoPickerProps) => {
  if (mainMenu === undefined) return null

  return (
    <ModalNav isOpen={isOpen} notNav={true}>
      {mainMenu
        .find(item => item.name === 'Termékek')
        .items
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
            {subitem.name}
          </Link>
      )}
    </ModalNav>
  )
}

export default DemoPicker;
