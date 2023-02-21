import { RefObject, useEffect } from "react";

type OutsideCloserProps = {
  ref: RefObject<HTMLDivElement>;
  setIsOpen: (isOpen: boolean) => void;
}

const useOutsideCloser = ({ ref, setIsOpen }: OutsideCloserProps) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!ref) return 
      if (ref.current && event.target && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideCloser;
