type ColoredDotProps = {
  color: string
}

const ColoredDot = ({ color }: ColoredDotProps) => {
  return (
    <span className={`${color} opacity-30`}>.</span>
  )
}

export default ColoredDot;
