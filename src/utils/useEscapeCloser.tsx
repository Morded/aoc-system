import { useEffect } from "react";

const useEscapeCloser = (onClose: () => void) => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape")
      onClose();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleEscape])
}

export default useEscapeCloser;
