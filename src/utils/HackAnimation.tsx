import { useEffect, useState } from "react";

const LETTERS = "abcdefghijklmnopqrstuvwxyz"

type HackAnimationProps = {
  defaultText: string
}

const HackAnimation = ({ defaultText }: HackAnimationProps): string => {
  const [innerText, setInnerText] = useState('');
  const [inAnimation, setInAnimation] = useState(false);

  const animateHackText = () => {
    if (inAnimation) return 
    setInAnimation(true)
    let iterations = 0;

    const interval = setInterval(() => {
      const randomText = defaultText.split("")
        .map((letter, index) => {
          if (index < iterations) return defaultText[index];

          return letter === " " 
            ? letter 
            : LETTERS[Math.floor(Math.random() * 26)]
        })
        .join("")

      if (iterations >= defaultText.length) {
        clearInterval(interval)
        setInAnimation(false)
      }
      
      setInnerText(randomText)
      iterations += 1 / 3;
    }, 40)
  }

  useEffect(() => {
    animateHackText()
  }, [])

  return innerText;
}

export default HackAnimation;
