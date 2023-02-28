import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import ProductsModal from "./ProductsModal";

type Props = {
  type?: "orange"
  buttonText: string
  big?: boolean
}

const ProductPicker = ({ type, buttonText, big}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const bgColor = type === "orange" ? "bg-aocOrange" : undefined
  const textColor = type === "orange" ? "text-aocDark" : undefined

  const handleClick = () => {
    if (inProgress) return 

    setInProgress(true)
    setIsOpen(!isOpen)
    setInProgress(false)
  }

  return (
    <div 
      className="mt-4 w-fit relative" 
    >
      <Button 
        text={buttonText} 
        bgColor={bgColor} 
        textColor={textColor}
        onClick={handleClick}
        big={big}
      />
        {isOpen && createPortal(
          <ProductsModal onClose={handleClick} />,
          document.body
        )}
    </div>
  )
}

export default ProductPicker
