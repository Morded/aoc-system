import styles from "../styles/animations.module.css"

type ModalNavProps = {
  isOpen: boolean;
  notNav?: boolean;
  children: React.ReactNode;
}

const ModalNav = ({ isOpen, notNav, children }: ModalNavProps) => {
  return (
    <div className={`${isOpen ? "h-auto" : "h-0"} 
      transition-all w-full flex flex-col
      ${notNav === true 
      ? '-translate-x-1/2 left-1/2 rounded-md absolute w-max shadow bg-aocLight' 
      : 'md:-translate-x-1/2 md:left-1/2 md:rounded-md md:absolute md:w-max md:shadow md:bg-aocLight'
      }
      
       
    `}>
      {children}
    </div>
  )
}

export default ModalNav;

