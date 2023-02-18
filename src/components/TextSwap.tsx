import { useEffect, useState } from "react";
import styles from "../styles/animations.module.css"

type TextSwapProps = {
  strings: string[];
  colors: string[];
  interval?: number;
};

const TextSwap = ({
  strings,
  colors,
  interval = 2000
}: TextSwapProps) => {
  const [currString, setCurrString] = useState(strings[0] ?? '');
  const [currColor, setCurrColor] = useState(colors[0] ?? '');
  const [animationStyle, setAnimationStyle] = useState(styles.fade ?? '');

  useEffect(() => {
    const timer = setInterval(() => {
      const currIndex: number = strings.indexOf(currString);
      const nextIndex: number =
        currIndex < strings.length - 1 ? currIndex + 1 : 0;
      setCurrString(strings[nextIndex] ?? '');
      setCurrColor(colors[nextIndex] ?? '');
    }, interval);
    return () => {
      setAnimationStyle('');
      clearInterval(timer);
      setAnimationStyle(styles.fade ?? '');
    };
  }, [currString, strings, colors, interval, animationStyle]);

  return (
    <span key={currString} className={`${animationStyle ?? ''} ${currColor}`}>
      {currString}
    </span>
  );
};

export default TextSwap;
