import Image from "next/image";

type ModalButtonProps = {
  type: "exit" | "hamburger"
  onClick: () => void
}

const ModalButton = ({ type, onClick }: ModalButtonProps) => {
  return (
    <div className="w-full flex justify-end hover:opacity-50 md:hidden">
      <Image 
        alt="close button"
        src={`/${type}.svg`} 
        width={42}
        height={42}
        className={`
          transition-all cursor-pointer float-right
          ${type === "exit" ? "m-8 p-2" : "p-2"}
        `}
        onClick={onClick}
      />
    </div>
  )
}

export default ModalButton;
